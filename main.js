let farmlaxArray = [
    "images/Farmlax.png",
    "images/Farmlax2.png",
    "images/Farmlax3.png"
];
let flIndex = 0;

let leftArrowFL = document.getElementById("farmlax-left");
leftArrowFL.addEventListener("click", () => {
    flIndex--;
    leftArrowFL.previousElementSibling.src = farmlaxArray[Math.abs(flIndex) % 3];
});

let rightArrowFL = document.getElementById("farmlax-right");
rightArrowFL.addEventListener("click", () => {
    flIndex++
    rightArrowFL.previousElementSibling.previousElementSibling.src = farmlaxArray[Math.abs(flIndex) % 3];
});