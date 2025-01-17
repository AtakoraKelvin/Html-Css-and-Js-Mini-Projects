const toggler = document.querySelector("#toggler");

toggler.addEventListener("click", (e) => {
    if (e.checked) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
});
