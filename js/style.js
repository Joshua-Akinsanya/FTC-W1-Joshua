(() => {

const closeButton = document.querySelector("#close-menu-button");
const openButton = document.querySelector("#open-menu-button");
const navmenu = document.querySelector("#nav-menu");

closeButton.addEventListener('click', function () {
    navmenu.style.transform = 'translateX(100%)';
    setTimeout( () => {
        navmenu.style.transition = 'none';
    }, 300);
})

openButton.addEventListener('click', function () {
    navmenu.style.transition = 'transform 0.3s ease';
    navmenu.style.transform = 'translateX(0)';
})

// Prevent navmenu from shifting unexpectedly when resizing window

window.addEventListener('resize', function () {
    if(this.innerWidth >= 1024) {
        navmenu.style.transform = 'translateX(0)';
    }
    else {
        navmenu.style.transform = 'translateX(100%)';
    }
})

})();