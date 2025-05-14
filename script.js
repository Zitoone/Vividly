const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")){
        menuToggle.classList.remove("fa-bars")
        menuToggle.classList.add("fa-xmark") 
    } 
    else {
        menuToggle.classList.remove("fa-xmark")
        menuToggle.classList.add("fa-bars")
    }
});
window.addEventListener('resize', () => {
    navLinks.classList.remove("active")
    menuToggle.classList.remove("fa-xmark")
    menuToggle.classList.add("fa-bars")
});


