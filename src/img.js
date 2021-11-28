
const img = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"
];


const chosenImg = img[Math.floor(Math.random()*img.length)];

const bg = document.createElement('img');


bg.src = `./img/${chosenImg}`

document.body.appendChild(bg);

