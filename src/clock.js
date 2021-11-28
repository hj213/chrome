const clock = document.querySelector(".clock");

function clockApp (){
    const date = new Date();

    const hour = String(date.getHours()).padStart(2,"0");
    const minuet = String(date.getMinutes()).padStart(2,"0");

    clock.innerText = `${hour} : ${minuet}`
    
}


clockApp();
setInterval(clockApp, 1000);