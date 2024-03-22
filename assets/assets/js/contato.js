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
