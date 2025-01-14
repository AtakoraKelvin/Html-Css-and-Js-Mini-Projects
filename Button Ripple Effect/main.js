const btn = document.querySelector(".ripple-btn");

btn.addEventListener("mouseenter", (e) => {
    const x_pos = e.clientX - btn.getBoundingClientRect().left;
    const y_pos = e.clientY - btn.getBoundingClientRect().top;

    btn.style.setProperty("--Y", y_pos + "px");
    btn.style.setProperty("--X", x_pos + "px");
});
