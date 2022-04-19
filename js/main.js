//Start Header
let menuBar = document.querySelector(".menu-bar");
let header = document.querySelector(".header");


menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("fa-times");
    header.classList.toggle("active");
})

window.onresize = () => {
    header.classList.remove("active");
}
// Home Section "Typed js Plugin"
var typed = new Typed('.element', {
    strings: ['Frontend Developer.', 'Freelancer.', 'Photographer.', 'Ui/Ux Designer.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

//Pure Counter js
new PureCounter();