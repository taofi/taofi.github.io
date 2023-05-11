let stars = document.getElementsByClassName('star');
const svgElements = document.querySelector('.rating').querySelectorAll('svg');
console.log(svgElements);
let starsCount = 0;
for(let i = 1;i<=stars.length;i++){

    svgElements[i - 1].onmouseover = function(){
        if(starsCount == 0){
            for(let j = i - 1; j >= 0; j --){
                stars[j].setAttribute("fill", "white");
            }
        }
    }
    svgElements[i - 1].onmouseout = function(){
        if(starsCount == 0){
            for(let j = i - 1; j >= 0; j --){
                stars[j].setAttribute("fill", "");
            }
        }
    }
    svgElements[i - 1].onclick = function(){
        if(starsCount == i){
            starsCount = 0;
        }
        else{
            starsCount = i;
        }
        console.log(starsCount);
        for(let j = starsCount - 1; j >= 0; j --){
            stars[j].setAttribute("fill", "white");
        }
        for(let j = starsCount; j < stars.length; j ++){
            stars[j].setAttribute("fill", "");
        }
    }
}