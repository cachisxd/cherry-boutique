// ==========================================
// 1. BASE DE DATOS DE PRODUCTOS (IMÁGENES CORREGIDAS Y EXACTAS)
// ==========================================
const products = [
    // CAMISAS
    {
        id: 1,
        title: "Camisa Satín Crema",
        category: "camisas",
        price: 450.00,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
        badge: "Más Vendido"
    },
    {
        id: 2,
        title: "Blusa Elegante Lino",
        category: "camisas",
        price: 490.00,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99b992?w=600&auto=format&fit=crop&q=80",
        badge: "Novedad"
    },
    {
        id: 3,
        title: "Camisa Oversize Minimal",
        category: "camisas",
        price: 520.00,
        image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&auto=format&fit=crop&q=80", // Imagen de camisa/playera oversize real
        badge: null
    },

    // PANTALONES
    {
        id: 4,
        title: "Pantalón Sastre Talle Alto",
        category: "pantalones",
        price: 680.00,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop&q=80",
        badge: null
    },
    {
        id: 5,
        title: "Pantalón Wide Leg Casual",
        category: "pantalones",
        price: 710.00,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
        badge: "Tendencia"
    },
    {
        id: 6,
        title: "Jogger Streetwear Urban",
        category: "pantalones",
        price: 590.00,
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=80",
        badge: null
    },

    // ABRIGOS
    {
        id: 7,
        title: "Abrigo Lana Elegante",
        category: "abrigos",
        price: 1250.00,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&auto=format&fit=crop&q=80",
        badge: "Exclusivo"
    },
    {
        id: 8,
        title: "Gabardina Clásica Beige",
        category: "abrigos",
        price: 1100.00,
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80",
        badge: null
    },
    {
        id: 9,
        title: "Chaqueta Acolchada Corta",
        category: "abrigos",
        price: 980.00,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80",
        badge: "Invierno"
    },

    // VESTIDOS
    {
        id: 10,
        title: "Vestido Elegante Cereza",
        category: "vestidos",
        price: 890.00,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80",
        badge: "Novedad"
    },
    {
        id: 11,
        title: "Vestido Midi Satín",
        category: "vestidos",
        price: 950.00,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
        badge: "Más Vendido"
    },
    {
        id: 12,
        title: "Vestido Casual Verano",
        category: "vestidos",
        price: 620.00,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=80",
        badge: null
    },

    // ACCESORIOS
    {
        id: 13,
        title: "Bolso de Mano Elegante",
        category: "accesorios",
        price: 540.00,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
        badge: "Tendencia"
    },
    {
        id: 14,
        title: "Mochila Minimalista Urbana",
        category: "accesorios",
        price: 320.00,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80", // Imagen de cinturón de piel real
        badge: null
    },
    {
        id: 15,
        title: "Lentes de Sol Retro",
        category: "accesorios",
        price: 280.00,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
        badge: null
    },

    // GORRAS
    {
        id: 16,
        title: "Gorra Casual Cherry",
        category: "gorras",
        price: 290.00,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80",
        badge: null
    },
    {
        id: 17,
        title: "Gorra Dad Hat Streetwear",
        category: "gorras",
        price: 310.00,
        image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600&auto=format&fit=crop&q=80", // Imagen de gorra streetwear real
        badge: "Novedad"
    },
    {
        id: 18,
        title: "Gorra Visera Plana Negra",
        category: "gorras",
        price: 340.00,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&auto=format&fit=crop&q=80",
        badge: null
    }
];

// ==========================================
// 2. VARIABLES GLOBALES Y PERSISTENCIA
// ==========================================
let cart = JSON.parse(localStorage.getItem('cherryBoutiqueCart')) || [];

const productGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

const cartBtn = document.getElementById('cartBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartBody = document.getElementById('cartBody');
const cartBadge = document.getElementById('cartBadge');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

// ==========================================
// 3. RENDERIZADO DEL CATÁLOGO Y FILTROS
// ==========================================
function renderProducts(filter = 'all') {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const badgeHTML = product.badge 
            ? `<span class="product-badge">${product.badge}</span>` 
            : '';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper" style="position:relative; overflow:hidden; border-radius:8px; background:#f9f5f6;">
                ${badgeHTML}
                <img src="${product.image}" alt="${product.title}" loading="lazy" style="width:100%; height:250px; object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&auto=format&fit=crop&q=80'">
            </div>
            <div class="product-info" style="padding: 15px 0;">
                <span class="product-category" style="font-size:0.85rem; color:#888; text-transform:uppercase;">${product.category}</span>
                <h3 class="product-title" style="font-size:1.1rem; margin: 5px 0; font-family:'Playfair Display', serif;">${product.title}</h3>
                <div class="product-bottom" style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
                    <span class="product-price" style="font-weight:600; color:#800020; font-size:1.1rem;">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" style="background:#800020; color:#fff; border:none; padding:8px 12px; border-radius:5px; cursor:pointer; font-size:0.9rem;">
                        <i class="fa-solid fa-bag-shopping"></i> Agregar
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Eventos de los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');
        renderProducts(filterValue);
    });
});

function toggleCart() {
    if (cartDrawer) cartDrawer.classList.toggle('active');
    if (cartOverlay) cartOverlay.classList.toggle('active');
}

if (cartBtn) cartBtn.addEventListener('click', toggleCart);
if (cartCloseBtn) cartCloseBtn.addEventListener('click', toggleCart);
if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

// Menú hamburguesa (celular)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    // Cierra el menú al tocar un enlace
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
}

// ==========================================
// 5. GESTIÓN DEL CARRITO (LOCALSTORAGE)
// ==========================================
function saveCart() {
    localStorage.setItem('cherryBoutiqueCart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }

    saveCart();
    
    if (cartDrawer && !cartDrawer.classList.contains('active')) {
       toggleCart();
    
    }
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateCartUI() {
    if (!cartBody) return;

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    if (cartBadge) cartBadge.textContent = totalItems;

    cartBody.innerHTML = '';

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: #666;">
                <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; margin-bottom: 15px; opacity: 0.3;"></i>
                <p>Tu carrito de apartado está vacío.</p>
                <small>¡Elige tus prendas favoritas del catálogo!</small>
            </div>
        `;
        if (cartTotalPrice) cartTotalPrice.textContent = '$0.00';
        return;
    }

    let grandTotal = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        grandTotal += subtotal;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.style.cssText = "display: flex; align-items: center; gap: 12px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;";
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px;">
            <div style="flex-grow: 1;">
                <h4 style="font-size: 0.95rem; margin: 0 0 4px 0; font-family:'Playfair Display', serif;">${item.title}</h4>
                <p style="font-size: 0.8rem; color: #666; margin: 0;">$${item.price.toFixed(2)} c/u</p>
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
                    <button onclick="changeQty(${item.id}, -1)" style="width:22px; height:22px; border:1px solid #ccc; background:#fff; cursor:pointer; border-radius:4px;">-</button>
                    <span style="font-size: 0.9rem; font-weight:600;">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)" style="width:22px; height:22px; border:1px solid #ccc; background:#fff; cursor:pointer; border-radius:4px;">+</button>
                </div>
            </div>
            <div style="text-align: right;">
                <strong style="font-size: 0.9rem; display:block; margin-bottom: 6px; color:#800020;">$${subtotal.toFixed(2)}</strong>
                <button onclick="removeFromCart(${item.id})" title="Eliminar" style="background:none; border:none; color:#d9534f; cursor:pointer; font-size: 1rem;">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        cartBody.appendChild(cartItemEl);
    });

    if (cartTotalPrice) {
        cartTotalPrice.textContent = `$${grandTotal.toFixed(2)}`;
    }
}

// ==========================================
// 6. CHECKOUT / GENERADOR DE TICKET WHATSAPP
// ==========================================
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega al menos una prenda para apartar.');
        return;
    }

    const phoneNumber = "525563254067";
    const folio = "CB-" + Math.floor(100000 + Math.random() * 900000);
    const fecha = new Date().toLocaleDateString('es-MX');

    let message = `🍒 *CHERRY BOUTIQUE - TICKET DE APARTADO* 🍒\n`;
    message += `*Folio:* ${folio}\n`;
    message += `*Fecha:* ${fecha}\n`;
    message += `-----------------------------------\n\n`;

    let total = 0;
    cart.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        message += `${index + 1}. *${item.title}*\n`;
        message += `   Cant: ${item.qty} x $${item.price.toFixed(2)} = *$${subtotal.toFixed(2)}*\n`;
    });

    message += `\n-----------------------------------\n`;
    message += `*TOTAL A PAGAR: $${total.toFixed(2)} MXN*\n`;
    message += `-----------------------------------\n\n`;
    message += `¡Hola! Me gustaría confirmar la disponibilidad de estas prendas para proceder con el apartado y coordinar el pago. ¡Gracias!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener('click', checkoutWhatsApp);
}

// ==========================================
// 7. INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    updateCartUI();
});