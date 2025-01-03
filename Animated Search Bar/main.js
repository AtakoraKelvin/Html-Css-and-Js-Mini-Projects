const search = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".searchbar");

search.addEventListener("click", () => {
    searchContainer.classList.toggle("mini");
});
