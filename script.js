const imgWidth = document.querySelector(".slider-cont");
const slides = [...document.querySelectorAll(".slides")];
const sliderCont = document.querySelector(".slider-cont");
const moveForward = document.querySelector(".fa-chevron-right");
const moveBackward = document.querySelector(".fa-chevron-left");

let currentNum = 0;
let imgContWidth = imgWidth.clientWidth;
let totalWidth = 0;

for(let i=0; i <= slides.length; i++){
    totalWidth += imgContWidth;

}

const maxWidth = totalWidth - imgContWidth;

function displaySlide(num){
    let currentWidth = imgContWidth * num;

    if(currentWidth >= maxWidth){
        sliderCont.style.transform = `translateX(-0px)`;
        currentNum = 0;
        console.log(currentNum)
    }else{
        sliderCont.style.transform = `translateX(-${currentWidth}px)`;
        console.log(currentNum)
    }

    currentNum++;
    
}

function setValue(){
    displaySlide(currentNum);
}

setInterval(setValue, 5000)
