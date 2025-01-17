const toggler = document.querySelector("#toggler");

toggler.addEventListener("click", (e) => {
    if (e.target.checked) {
        document.body.style.background = "#000";
    } else {
        document.body.style.background = "#fff";
    }
});
