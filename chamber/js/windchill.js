document.addEventListener("DOMContentLoaded", function(){
    buildModDate();
    const menuButton = document.querySelector("#menuBtn");
    menuButton.addEventListener('click',menuButton);
    let speed = 3;
    let temp = 25;
    let feelTemp = document.getElementById('feelTemp');
    feelTemp.innerHTML = buildWC(speed, temp);
});

function buildWC(speed, temp) {
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    wc = Math.floor(wc);

    wc = (wc > temp) ? temp : wc;

    console.log(wc);
    return wc;
}
