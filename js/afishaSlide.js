let currentPos = 0;
let convAfish = document.getElementById('conveyorAfish');
let widthA;
let widthCont;
let maxPos;
let arrRA = document.getElementById('arrRA');
let arrLA = document.getElementById('arrLA');
let posters = document.querySelectorAll('.poster');
let posterW = posters[0].offsetWidth + 40;
let shag = posterW;
let countP = posters.length;

let visiblePoster;
let FunId;
const delayF = 200;

arrLA.addEventListener("mousedown", function() {
    FunId = setInterval(arrLF, delayF);
 });
  
 arrLA.addEventListener("mouseup", function() {
    clearInterval(FunId);
});
arrLA.addEventListener("mouseleave", function() {
    clearInterval(FunId);
});

arrLA.addEventListener('click', arrLF);

function arrLF(){
    currentPos += shag;
    currentPos = Math.min(0, currentPos);
    move();
}

arrRA.addEventListener("mousedown", function() {
    FunId = setInterval(arrRF, delayF);
 });
  
 arrRA.addEventListener("mouseup", function() {
    clearInterval(FunId);
});
arrRA.addEventListener("mouseleave", function() {
    clearInterval(FunId);
});


arrRA.addEventListener('click', arrRF);

function arrRF(){
    widthCont = document.getElementById('afishaContent').offsetWidth;
    visiblePoster = widthCont / posterW;
    let tmp = posterW*(Math.trunc(visiblePoster) - visiblePoster);
    maxPos = (countP - Math.trunc(visiblePoster)) * (posterW) + tmp; 
    currentPos -= shag;
    currentPos = Math.max(currentPos, -(maxPos + 50))
    move();
}

function move(){
    convAfish.style.transform = `translatex(${currentPos}px)`;
}

window.addEventListener("resize", changeWindow);

function changeWindow() {
    if (window.innerWidth <= 320) {
        currentPos = 0;
        move();
    }else{
        document.getElementById('afishaContent').transform = 'translatex(0px)';
    }
}