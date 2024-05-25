let menuShow = document.querySelector(".menu-mobile span");
let menuMobile = document.querySelector(".menu-mobile ul");
let menulink = document.querySelectorAll(".menu-link");

menuShow.addEventListener("click", (e) => {
  e.preventDefault();
  let menuMobile = document.querySelector(".menu-mobile ul");
  if (menuMobile.classList.contains("show-menu")) {
    menuMobile.classList.remove("show-menu");
  } else {
    menuMobile.classList.add("show-menu");
  }
});

// Adiciona evento de clique a cada link do menu
menuLink.forEach(link => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("show-menu");
  });
});
