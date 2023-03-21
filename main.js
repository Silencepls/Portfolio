const farmlaxArray = [
    "images/Farmlax.png",
    "images/Farmlax2.png",
    "images/Farmlax3.png"
];

const artsArray = [
    "images/arts/Soul.jpg",
    "images/arts/1 ink - Gargula.jpg",
    "images/arts/2 ink - Pressa.jpg",
    "images/arts/3 ink - Morcego.jpg",
    "images/arts/4 ink - Ostra.jpg",
    "images/arts/Monogatari ed 1 Full.png",
    "images/arts/11 ink - Eargle.jpg"
];

const imagesToPreload = [...farmlaxArray, ...artsArray];

const preloadedImages = [];

Promise.all(imagesToPreload.map(url => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            preloadedImages[url] = img;
            resolve();
        };
        img.onerror = () => {
            reject(`Failed to load image ${url}`);
        };
        img.src = url;
    });
}))
    .then(() => {
        const leftArrowFL = document.getElementById("farmlax-left");
        const rightArrowFL = document.getElementById("farmlax-right");
        const leftArrowArt = document.querySelectorAll(".short-arrow.arrow.left-arrow");
        const rightArrowArt = document.querySelectorAll(".short-arrow.arrow.right-arrow");

        let flIndex = 0;
        let artIndex = 0;

        leftArrowFL.addEventListener("click", () => {
            flIndex--;
            leftArrowFL.previousElementSibling.src = preloadedImages[farmlaxArray[(flIndex + farmlaxArray.length) % farmlaxArray.length]].src;
        });

        rightArrowFL.addEventListener("click", () => {
            rightArrowFL.previousElementSibling.previousElementSibling.src = preloadedImages[farmlaxArray[(flIndex + 1) % farmlaxArray.length]].src;
            flIndex = (flIndex + 1) % farmlaxArray.length;
        });

        leftArrowArt[0].addEventListener("click", () => {
            artIndex--;
            leftArrowArt[0].previousElementSibling.src = preloadedImages[artsArray[(artIndex + artsArray.length) % artsArray.length]].src;
        });

        rightArrowArt[0].addEventListener("click", () => {
            rightArrowArt[0].previousElementSibling.previousElementSibling.src = preloadedImages[artsArray[(artIndex + 1) % artsArray.length]].src;
            artIndex = (artIndex + 1) % artsArray.length;
        });
    })
    .catch((error) => {
        console.error(error);
    });

// let farmlaxArray = [
//     "images/Farmlax.png",
//     "images/Farmlax2.png",
//     "images/Farmlax3.png"
// ];
// let flIndex = 0;

// let artsArray = [
//     "images/arts/Soul.jpg",
//     "images/arts/1 ink - Gargula.jpg",
//     "images/arts/2 ink - Pressa.jpg",
//     "images/arts/3 ink - Morcego.jpg",
//     "images/arts/4 ink - Ostra.jpg",
//     "images/arts/Monogatari ed 1 Full.png",
//     "images/arts/11 ink - Eargle.jpg"
// ]
// let artIndex = 0;

// let leftArrowFL = document.getElementById("farmlax-left");
// leftArrowFL.addEventListener("click", () => {
//     flIndex--;
//     leftArrowFL.previousElementSibling.src = farmlaxArray[(flIndex + farmlaxArray.length) % farmlaxArray.length];
// });

// let rightArrowFL = document.getElementById("farmlax-right");
// rightArrowFL.addEventListener("click", () => {
//     rightArrowFL.previousElementSibling.previousElementSibling.src = farmlaxArray[(flIndex + 1) % farmlaxArray.length];
//     flIndex = (flIndex + 1) % farmlaxArray.length;
// });

// let leftArrowArt = document.querySelectorAll(".short-arrow.arrow.left-arrow");
// leftArrowArt[0].addEventListener("click", () => {
//     artIndex--;
//     leftArrowArt[0].previousElementSibling.src = artsArray[(artIndex + artsArray.length) % artsArray.length];
// });

// let rightArrowArt = document.querySelectorAll(".short-arrow.arrow.right-arrow");
// rightArrowArt[0].addEventListener("click", () => {
//     rightArrowArt[0].previousElementSibling.previousElementSibling.src = artsArray[(artIndex + 1) % artsArray.length];
//     artIndex = (artIndex + 1) % artsArray.length;
// });