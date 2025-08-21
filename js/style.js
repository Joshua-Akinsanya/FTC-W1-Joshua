(() => {

const closeButton = document.querySelector("#close-menu-button");
const openButton = document.querySelector("#open-menu-button");
const navmenu = document.querySelector("#nav-menu");

closeButton.addEventListener('click', function () {
    navmenu.style.transform = 'translateX(100%)'
})

openButton.addEventListener('click', function () {
    navmenu.style.transform = 'translateX(0)';
})

})();