const formEl = document.querySelector("form");
const inputEl = document.getElementById("dob");
const btnEl = document.getElementById("get-dob");
const result = document.querySelector(".result");

const formatDate = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const formatedDate = `${year}-${month}-${day}`;
    return formatedDate;
};

const calAge = () => {
    const dob = formatDate(inputEl.value);
    const date = new Date(Date.now());
    const currentDate = formatDate(date);
    const splitDob = dob.split("-");
    const splitCurrentDate = currentDate.split("-");
    const yearDiff = +splitCurrentDate[0] - +splitDob[0];
    const monthDiff = +splitCurrentDate[1] - +splitDob[1];
    const dayDiff = +splitCurrentDate[2] - +splitDob[2];

    const age = monthDiff >= 0 && dayDiff >= 0 ? yearDiff : yearDiff - 1;
    return age;
};

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const age = calAge();
    result.textContent = `You are ${age > 1 ? age + " years old." : age + " year old"} `;
});
