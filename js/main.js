window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
})

var openmenu = document.getElementById('toogle-button-open');
var closemenu = document.getElementById('toogle-button-close');
var item = document.getElementById('item');
var menu = document.getElementById('menu');

openmenu.onclick = function(){
    menu.style.right = 0;
}

closemenu.onclick = function(){
    menu.style.right = "-100%";
}

item.onclick = function(){
    menu.style.right = "-100%";
}