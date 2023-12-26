const arrL = document.getElementById('arrowL').querySelector('img');
const arrR = document.getElementById('arrowR').querySelector('img');
const galleryWindow = document.getElementById('galleryWindow');
const slides = document.getElementsByClassName('slide');
const countSlide = slides.length;
let visSlide = 0;
let last = 0;
slides[visSlide].style.opacity = '1';

function Swipe(direction){
    last = visSlide;
    visSlide += direction;
    if(visSlide < 0)
        visSlide = countSlide - 1;
    if(visSlide >= countSlide)
        visSlide = 0;
    change();
}

function change(){
   // console.log(visSlide);
    slides[last].style.opacity ='0';
    slides[visSlide].style.opacity = '1';
}
console.log(arrL);
arrR.addEventListener('click', () => Swipe(1));
arrL.addEventListener('click', () => Swipe(-1));
