const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navLinks = document.querySelectorAll(".navbar a");
const nav = document.querySelector('.navbar');

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

navLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}

function navToSolid() {
  window.onscroll = () => {
    if(window.pageYOffset > 100) {
      nav.style.background = "#fff";
      nav.style.height = "90px";
    } else { 
        nav.style.height ="90px";
    
      
    }
  }
}

navToSolid();