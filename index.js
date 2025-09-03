let img = document.getElementById("img");
let warning = document.getElementById("warning")
let currWidth = 300;
let currHeight = 200;
// img.src = "https://t3.ftcdn.net/jpg/07/78/33/76/360_F_778337655_5QMB6AeqCgXYjhaBtesZL7k7ZmPSftvb.jpg";
img.style.width = currWidth + "px";
img.style.height = currHeight + "px";

function onIncBtn() {
    if(currHeight<500 && currWidth<500){
    currWidth += 50;
    currHeight += 50;
    img.style.width = currWidth + "px";
    img.style.height = currHeight + "px";
    warning.textContent = "";
    }
    else{
        warning.textContent = "Maximum zoom level reached";
        warning.style.color = "red";
    }
}

function onDecBtn() {
    if (currWidth > 100 && currHeight > 100) {
                currWidth -= 50;
                currHeight -= 50;
                img.style.width = currWidth + "px";
                img.style.height = currHeight + "px";
                warning.textContent = "";
            }
    else{
            warning.textContent = "Minimum zoom level reached";
            warning.style.color = "red";
    }
}