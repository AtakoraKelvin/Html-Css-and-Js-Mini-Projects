const heroImg = document.querySelector(".hero");

function fadeBg() {
    heroImg.style.opacity = `${1 - window.scrollY / heroImg.scrollHeight}`;
}

window.addEventListener("scroll", fadeBg);
