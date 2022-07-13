// MENU TOGGLE
const menuToggler = () => {
     const menu = document.querySelector(".small-menu");

     if (menu.style.width === "100%") {
          menu.classList.add("opacity-0");
          menu.style.width = "0";
     } else {
          menu.classList.remove("opacity-0");
          menu.style.width = "100%";
     }
}

window.onscroll = function (e) {
     const topHeader = document.querySelector(".top-header");
     const nav = document.querySelector(".nav");

     if (window.scrollY > 100) {
          topHeader.classList.remove("md:w-full");
          nav.classList.remove("md:w-full");
     } else {
          topHeader.classList.add("md:w-full");
          nav.classList.add("md:w-full");
     }
}