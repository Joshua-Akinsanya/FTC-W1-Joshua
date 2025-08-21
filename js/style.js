(() => {

const closeButton = document.querySelector("#close-menu-button");
const openButton = document.querySelector("#open-menu-button");
const navmenu = document.querySelector("#nav-menu");

closeButton.addEventListener('click', function () {
    if(window.innerWidth < 1024) {
        navmenu.style.display = 'none';
    }
})

openButton.addEventListener('click', function () {
    navmenu.style.display = 'flex';
})

})();