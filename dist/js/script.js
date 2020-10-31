//select DOM(Document object Model like the htnl, ul elements)

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

//for nav links
const navItems = document.querySelectorAll(".nav-item");

//set initial state of overlay

let showMenu = false;

//adding event listener
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    //if overlay not showmn

    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    //nav links is abitt differnt, hence we loop thru
    navItems.forEach((item) => item.classList.add("show"));

    //reset menu states
    showMenu = true;
  } else {
    //is showmn

    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    //nav links is abitt differnt, hence we loop thru
    navItems.forEach((item) => item.classList.remove("show"));

    //reset menu states
    showMenu = false;
  }
}
