// in one rotation there is 360deg
//in 12 hr= 360 deg => 1hr = 30 deg
//in 60min = 360 deg => 1min = 6 deg
//in 60 sec = 360deg => 1sec = 6 deg

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function clock(){
    let date =  new Date();
    // console.log(date);
    let hr= date.getHours();
    let min= date.getMinutes();
    let sec= date.getSeconds();
    hour.style.transform = `rotateZ(${hr*30 + min/2}deg)`;
    minute.style.transform =`rotateZ(${min*6}deg)`;
    second.style.transform =`rotateZ(${sec*6}deg)`;

}   
clock();
setInterval(clock,1000);