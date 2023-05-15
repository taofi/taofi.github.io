let slides = document.getElementsByClassName('slider_pst'); 
let visSlide = 0;
let slidCount = slides.length;

let contener = document.getElementById('dotsContainer'); 
let dot;
let dots = [];
for(let i = 0; i < slidCount; i ++){
    dot = document.createElement("input");
    dot.className ='dots' + ' ' + i;
    dot.type = "button";
    contener.appendChild(dot);
    dots[i] = dot;
}
dots[0].style.border = '4px solid white';
let arrR = document.getElementById('arrPR');
let arrL = document.getElementById('arrPL');
console.log(slidCount);
for(let i = 0; i < slidCount; i ++){
    slides[i].style.opacity = '0';
}
slides[visSlide].style.opacity = '1';

let last;
const timerDelay = 10000;
let timerSwipe = setInterval(RSwipe, timerDelay);

arrL.addEventListener('click', LSwipe);
function LSwipe(){
    clearTimeout(timerSwipe);
    last = visSlide;
    visSlide --;
    if(visSlide < 0)
        visSlide = slidCount -1;
    chenge();
    timerSwipe = setInterval(LSwipe, timerDelay);
}
arrR.addEventListener('click', RSwipe);
function RSwipe(){
    clearTimeout(timerSwipe);
    last = visSlide;
   visSlide ++;
   if(visSlide >= slidCount)
        visSlide = 0;
    chenge();
    timerSwipe = setInterval(RSwipe, timerDelay);
}

contener.addEventListener('click', dotsClick, false)

function dotsClick(evt){
    let num = Number(evt.target.className[5]);
    console.log(num);
    if(num >= 0 && num < slidCount)
    {
        //console.log(num);
        clearTimeout(timerSwipe);
        last = visSlide; 
        visSlide = num;
        chenge();
        timerSwipe = setInterval(RSwipe, timerDelay);
    }
    
}


function chenge(){
    dots[last].style.border = '0';
    slides[last].style.opacity ='0';
    dots[visSlide].style.border = '5px solid white';
    slides[visSlide].style.opacity = '1';
}