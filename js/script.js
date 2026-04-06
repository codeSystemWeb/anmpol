const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");

function openMenu() {
  if (!menu || !overlay) return;
  menu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  if (!menu || !overlay) return;
  menu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (!menu) return;
  if (menu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
}

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMenu);
}

if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}

if (overlay) {
  overlay.addEventListener("click", closeMenu);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});


document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.querySelector('[name="nome"]').value;
    const whats = document.querySelector('[name="whats"]').value;
    const mensagem = document.querySelector('[name="mensagem"]').value;
   
    const numeroDestino = "5551999331079"; // SEU WHATS (com DDI + DDD)

    const texto = `Olá, vim pelo site!\n\n` +
                  `*Nome:* ${nome}\n` +
                  `*WhatsApp:* ${whats}\n` +
                  `*Mensagem:* ${mensagem}`;

    const textoCodificado = encodeURIComponent(texto);

    const url = `https://wa.me/${numeroDestino}?text=${textoCodificado}`;

    window.open(url, "_blank");
});