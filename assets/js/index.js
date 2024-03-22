document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
      var subMenu = document.getElementById(this.href.split("#")[1]);
      if(subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
        this.classList.remove('is-open');
      } else {
        subMenu.style.display = 'block';
        this.classList.add('is-open');
      }
    });
  });
  document.querySelectorAll('.duvidas-item').forEach(button => {
    button.addEventListener('click', function() {
      var subMenu = document.getElementById(this.href.split("#")[1]);
      if(subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
        this.classList.remove('is-open');
      } else {
        subMenu.style.display = 'block';
        this.classList.add('is-open');
      }
    });
  });
  document.querySelector('.btn-agende').addEventListener('click', function() {
    window.location.href = 'agenda.html';
});