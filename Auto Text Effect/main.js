const typing = document.querySelector(".typing");

let index = 0;
let currentLetter = 0;

const words = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Git & Github",
    "Programming",
    "Coding",
    "Problem Solving",
];

//split the word into array of individual letters
//And get them one by one
function getLetter() {
    let word = words[index].split("");
    typing.textContent += word[currentLetter];

    if (word.length - 1 > currentLetter) {
        currentLetter++;
        setTimeout(() => {
            getLetter();
        }, 300);
    } else {
        index++;

        setTimeout(() => {
            clearWord();
        }, 1500);
    }
}

//get the html element holding the word and split
//Clear word by poping of the individaul letters
function clearWord() {
    if (currentLetter > 0) {
        setTimeout(() => {
            let word = typing.textContent.split("");
            word.pop();
            typing.textContent = word.join("");
            currentLetter--;
            clearWord();
        }, 100);
    } else {
        typing.textContent = "";
        if (words.length - 1 === index) {
            index = 0;
        }

        getLetter();
    }
}

getLetter();
