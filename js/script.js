function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("background-gradient");
    } else {
      navbar.classList.remove("background-gradient");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);

//scroll event listener
function handleScroll() {
  const navbar_brand = document.getElementById("navbar_brand");
  const nav_links = document.querySelectorAll(".nav-link");

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  //Adust font size based on scroll position

  if (scrollPosition > 50) {
    navbar_brand.style.width = "110px";
    nav_links.forEach((nav_link) => {
      nav_link.style.width = "106px"; // Set an initial width for the transition
      nav_link.classList.add("scroll-fontsize");
      
      
    });
  } else {
    navbar_brand.style.width = "170px";
    nav_links.forEach((nav_link) => {
      nav_link.style.width = "initial"; // Reset width to initial state
      nav_link.classList.remove("scroll-fontsize");
    });
  }
}

window.addEventListener("scroll", handleScroll);


