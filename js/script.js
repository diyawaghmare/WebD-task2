let b = document.querySelector('.menubtn');
let a = document.querySelector('.mobnav');
// if(){
a.style.display = "none";
b.addEventListener("click", function() {
    if (a.style.display == "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
});
// }

//Typing animation script

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Student", "Bibliophile", "Writer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});