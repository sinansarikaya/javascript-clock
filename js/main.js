// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString


let fullName = prompt("Write your name here?")
let userName = document.querySelector("#myName")
userName.innerHTML = fullName


function showTime() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const d = days[today.getDay()];

    fullTime = today.toLocaleTimeString('no-NO')

    let myclock = document.getElementById("myClock")
    myclock.innerHTML = fullTime + " " + d;
    setTimeout(showTime,1000)
    
}

showTime()