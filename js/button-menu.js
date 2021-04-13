let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('sidebar');
btnMenu.addEventListener('click', function () {
  mainNav.classList.toggle('mostrar');
});