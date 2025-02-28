document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", function () {
    var subMenu = document.getElementById(this.href.split("#")[1]);
    if (subMenu.style.display === "block") {
      subMenu.style.display = "none";
      this.classList.remove("is-open");
    } else {
      subMenu.style.display = "block";
      this.classList.add("is-open");
    }
  });
});
document.querySelectorAll(".duvidas-item").forEach((button) => {
  button.addEventListener("click", function () {
    var subMenu = document.getElementById(this.href.split("#")[1]);
    if (subMenu.style.display === "block") {
      subMenu.style.display = "none";
      this.classList.remove("is-open");
    } else {
      subMenu.style.display = "block";
      this.classList.add("is-open");
    }
  });
});
document.querySelector(".btn-agende").addEventListener("click", function () {
  window.location.href = "agenda.html";
});


function toggleMenu() {
  console.log('toggleMenu');
  var nav = document.querySelector('nav');
  nav.classList.toggle('show');
  
  // Imediatamente após alternar, verifique se precisa adicionar ou remover o ouvinte
  // que fecha o menu ao clicar fora
  if (nav.classList.contains('show')) {
      // Adiciona um ouvinte de clique ao documento para fechar o menu
      document.addEventListener('click', closeMenuOnClickOutside);
  } else {
      // Remove o ouvinte se o menu for fechado pelo botão hambúrguer novamente
      document.removeEventListener('click', closeMenuOnClickOutside);
  }
  
  // Impede que o evento de clique se propague e acione o ouvinte no document imediatamente
  event.stopPropagation();
}

// Função para fechar o menu ao clicar fora dele
function closeMenuOnClickOutside(event) {
  var nav = document.querySelector('nav');
  if (!nav.contains(event.target)) {
      nav.classList.remove('show');
      // Remove o ouvinte após o uso para evitar chamadas desnecessárias
      document.removeEventListener('click', closeMenuOnClickOutside);
  }
}
