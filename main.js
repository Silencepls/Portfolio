const farmlaxArray = [
    "images/Farmlax.png",
    "images/Farmlax2.png",
    "images/Farmlax3.png"
];
let loadedFl = [];
let flIndex = 0;

const artsArray = [
    "images/tuw3.png",
    "images/tuw2.png",
    "images/tuw1.png"
];
let loadedTUW = [];
let tuwIndex = 0;

let loadImages = new Promise((resolve) => {
    for (let i = 0; i < artsArray.length; i++) {
        let img = new Image();
        img.src = artsArray[i];
        loadedTUW.push(img);
    }
    for (let i = 0; i < farmlaxArray.length; i++) {
        let img = new Image();
        img.src = farmlaxArray[i];
        loadedFl.push(img);
    }
    resolve();
});

loadImages.then(() => {
    const leftArrowFL = document.querySelectorAll(".arrow.left-arrow");
    const rightArrowFL = document.querySelectorAll(".arrow.right-arrow");
    const leftArrowTUW = document.querySelectorAll(".tuw.arrow.left-arrow");
    const rightArrowTUW = document.querySelectorAll(".tuw.arrow.right-arrow");

    leftArrowFL[0].addEventListener("click", () => {
        flIndex == 0 ? flIndex = farmlaxArray.length - 1 : flIndex--;
        let val = flIndex % farmlaxArray.length;
        leftArrowFL[0].previousElementSibling.src = loadedFl[val].src;
    });

    rightArrowFL[0].addEventListener("click", () => {
        flIndex++;
        let val = flIndex % farmlaxArray.length;
        rightArrowFL[0].previousElementSibling.previousElementSibling.src = loadedFl[val].src;
    });

    leftArrowTUW[0].addEventListener("click", () => {
        tuwIndex == 0 ? tuwIndex = artsArray.length - 1 : tuwIndex--;
        let val = tuwIndex % artsArray.length;
        leftArrowTUW[0].previousElementSibling.src = loadedTUW[val].src;
    });

    rightArrowTUW[0].addEventListener("click", () => {
        tuwIndex++;
        let val = tuwIndex % artsArray.length;
        rightArrowTUW[0].previousElementSibling.previousElementSibling.src = loadedTUW[val].src;
    });
});