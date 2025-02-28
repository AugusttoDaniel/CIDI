function updatePathAndRoute() {
    const currentHash = window.location.hash; 
    console.log(currentHash);
    
    const currentRoute = currentHash.substring(1) || 'Home'; 

    const pathElement = document.getElementById('currentPath');
    const routeElement = document.getElementById('currentRoute');
  
    const routeName = {
      'Home': 'Home',
      'sobre': 'Sobre nós',
      'servicos': 'Serviços',
      'contato': 'Contato',
      'agende': 'Agende',
    };
  
if (pathElement && routeElement) {
    pathElement.innerHTML = `${routeName[currentRoute]}`;
    if (currentRoute !== 'Home' && routeName[currentRoute]) {
        routeElement.innerHTML = `<div class="route-icon-text"><svg class="home-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="black"/>
    </svg> Home >  ${routeName[currentRoute]}</div>`;
    } else {
        routeElement.innerHTML = `<div class="route-icon-text"><svg class="home-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="black"/>
    </svg> ${routeName[currentRoute] || currentRoute}</div>`;
    }
}

}

window.addEventListener('hashchange', updatePathAndRoute);
window.addEventListener('DOMContentLoaded', updatePathAndRoute);

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
  