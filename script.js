var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");
var hero = document.querySelector(".hero");


menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    hero.classList.toggle("large-hero");
}