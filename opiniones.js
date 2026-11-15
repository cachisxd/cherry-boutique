// Conecta la sección "Opiniones" del index con la base de datos (opiniones generales de la tienda).
window.addEventListener('load', () => {
  const PRODUCTO_GENERAL = 0;
 
  const viejo   = document.getElementById('reviewForm');
  const lista   = document.getElementById('reviewsList');
  const resumen = document.getElementById('reviewsSummary');
  if (!viejo || !lista) return;
 
  // Reemplaza el formulario por una copia limpia para quitar cualquier código viejo de script.js
  const form = viejo.cloneNode(true);
  viejo.replaceWith(form);
  const mensaje = form.querySelector('#reviewMessage');
 
  const estrellas = n => '★'.repeat(n) + '☆'.repeat(5 - n);
 
  async function cargar() {
    lista.textContent = 'Cargando opiniones…';
    resumen.textContent = '';
    try {
      const res  = await fetch('obtener_opiniones.php?producto_id=' + PRODUCTO_GENERAL);
      const data = await res.json();
      lista.textContent = '';
 
      if (!data.ok || data.opiniones.length === 0) {
        lista.textContent = 'Aún no hay opiniones. Sé la primera persona en opinar.';
        return;
      }
 
      resumen.textContent = estrellas(Math.round(data.promedio)) + '  ' + data.promedio + ' de 5 · ' + data.opiniones.length + ' opiniones';
 
      data.opiniones.forEach(o => {
        const item = document.createElement('article');
        item.style.cssText = 'background:#fff;padding:16px 20px;border-radius:12px;box-shadow:0 2px 10px rgba(0,0,0,.05);margin-bottom:12px;';
 
        const cab = document.createElement('div');
        const nombre = document.createElement('strong');
        nombre.textContent = o.nombre;
        const stars = document.createElement('span');
        stars.style.cssText = 'color:#800020;margin-left:8px;';
        stars.textContent = estrellas(Number(o.calificacion));
        cab.append(nombre, stars);
 
        const txt = document.createElement('p');
        txt.style.margin = '8px 0 4px';
        txt.textContent = o.comentario;          // textContent: evita inyectar HTML
 
        const fecha = document.createElement('small');
        fecha.style.color = '#888';
        fecha.textContent = o.fecha;
 
        item.append(cab, txt, fecha);
        lista.appendChild(item);
      });
    } catch (e) {
      lista.textContent = 'No se pudieron cargar las opiniones. Intenta de nuevo.';
    }
  }
 
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const datos = new FormData(form);
    datos.append('producto_id', PRODUCTO_GENERAL);
    mensaje.textContent = 'Publicando…';
    try {
      const res = await fetch('guardar_opinion.php', { method: 'POST', body: datos });
      const r   = await res.json();
      if (r.ok) {
        form.reset();
        mensaje.textContent = 'Opinión publicada. ¡Gracias!';
        cargar();
      } else {
        mensaje.textContent = r.error || 'No se pudo publicar la opinión.';
      }
    } catch (err) {
      mensaje.textContent = 'No se pudo publicar la opinión. Intenta de nuevo.';
    }
  });
 
  cargar();
});
 
