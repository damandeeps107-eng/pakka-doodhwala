/* ==========================================================================
   PAKKA DOODHWALA - CLEAN ANIMATED HOMEPAGE JAVASCRIPT
   ========================================================================== */

const WHATSAPP_PHONE = "919997287773";
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  initCartTrigger();
});

/* -------------------------------------------------------------------------- */
/* MODAL FUNCTIONS                                                            */
/* -------------------------------------------------------------------------- */
function openOrderModal() {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openPurityModal() {
  const modal = document.getElementById('purityModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closePurityModal() {
  const modal = document.getElementById('purityModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* -------------------------------------------------------------------------- */
/* WHATSAPP FORM SUBMISSION                                                   */
/* -------------------------------------------------------------------------- */
function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('custName').value.trim();
  const product = document.getElementById('custProduct').value;
  const qty = document.getElementById('custQty').value;
  const time = document.getElementById('custTime').value;
  const address = document.getElementById('custAddress').value.trim();

  const message = 
`🥛 *NEW MILK ORDER - PAKKA DOODHWALA (HYDERABAD)* 🥛

👤 *Name:* ${name}
📦 *Product:* ${product}
⚖️ *Quantity:* ${qty}
⏰ *Schedule:* ${time}
📍 *Hyderabad Area:* ${address}

_Sent via Pakka Doodhwala Website_`;

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

  showToast('Redirecting to WhatsApp...');
  closeOrderModal();

  setTimeout(() => {
    window.open(url, '_blank');
    document.getElementById('orderForm').reset();
  }, 400);
}

/* -------------------------------------------------------------------------- */
/* CART DRAWER FUNCTIONS                                                      */
/* -------------------------------------------------------------------------- */
function initCartTrigger() {
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
  }
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* -------------------------------------------------------------------------- */
/* TOAST NOTIFICATION                                                         */
/* -------------------------------------------------------------------------- */
function showToast(text) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
