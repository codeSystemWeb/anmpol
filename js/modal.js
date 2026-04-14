document.addEventListener("DOMContentLoaded", function () {
  const linkImagem = document.getElementById("linkImagem");
  const modalImagem = document.getElementById("modalImagem");
  const fecharModal = document.getElementById("fecharModal");

  if (!linkImagem || !modalImagem || !fecharModal) return;

  function abrirModal() {
    modalImagem.classList.add("ativo");
    modalImagem.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function fecharModalFunc() {
    modalImagem.classList.remove("ativo");
    modalImagem.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  linkImagem.addEventListener("click", function (e) {
    e.preventDefault();
    abrirModal();
  });

  fecharModal.addEventListener("click", function () {
    fecharModalFunc();
  });

  modalImagem.addEventListener("click", function (e) {
    if (e.target === modalImagem) {
      fecharModalFunc();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalImagem.classList.contains("ativo")) {
      fecharModalFunc();
    }
  });
});