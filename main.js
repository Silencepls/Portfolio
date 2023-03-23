const farmlaxArray = [
    "images/Farmlax.png",
    "images/Farmlax2.png",
    "images/Farmlax3.png"
];
let loadedFl = [];
let flIndex = 0;

const artsArray = [
    "images/arts/Soul.jpg",
    "images/arts/1 ink - Gargula.jpg",
    "images/arts/2 ink - Pressa.jpg",
    "images/arts/3 ink - Morcego.jpg",
    "images/arts/4 ink - Ostra.jpg",
    "images/arts/Monogatari ed 1 Full.png",
    "images/arts/11 ink - Eargle.jpg"
];
let loadedArts = [];
let artIndex = 0;

let loadImages = new Promise((resolve) => {
    for (let i = 0; i < artsArray.length; i++) {
        let img = new Image();
        img.src = artsArray[i];
        loadedArts.push(img);
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
    const leftArrowArt = document.querySelectorAll(".short-arrow.arrow.left-arrow");
    const rightArrowArt = document.querySelectorAll(".short-arrow.arrow.right-arrow");

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

    leftArrowArt[0].addEventListener("click", () => {
        artIndex == 0 ? artIndex = artsArray.length - 1 : artIndex--;
        let val = artIndex % artsArray.length;
        leftArrowArt[0].previousElementSibling.src = loadedArts[val].src;
    });

    rightArrowArt[0].addEventListener("click", () => {
        artIndex++;
        let val = artIndex % artsArray.length;
        rightArrowArt[0].previousElementSibling.previousElementSibling.src = loadedArts[val].src;
    });
});