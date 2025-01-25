const header = document.querySelector("header");

window.addEventListener('scroll',function(){
  header.classList.toggle("sticky",this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navMenu = document.querySelector('.navmenu');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navMenu.classList.toggle('open')
}