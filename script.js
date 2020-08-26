// mobile menu

const menuBtn = document.querySelector(".menu-btn");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  if (!isOpen) {
    menuBtn.innerHTML = '<img src="./assets/icons/icon-close.svg" alt="" />';
    isOpen = !isOpen;
  } else {
    menuBtn.innerHTML =
      '<img src="./assets/icons/icon-hamburger.svg" alt="" />';
    isOpen = !isOpen;
  }
});
