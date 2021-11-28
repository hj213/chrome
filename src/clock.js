const clock = document.querySelector(".clock");

function clockApp (){
    const date = new Date();

    const hour = String(date.getHours()).padStart(2,"0");
    const minuet = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour} : ${minuet} : ${second}`
    console.log(`${hour} : ${minuet} : ${second}`);
    
}


clockApp();
setInterval(clockApp, 1000);