let openB = document.getElementById('Bopen');
let menuBg = document.getElementById('burger_container');
let closeB = document.getElementById('Bclose');
openB.addEventListener('click', function(){
    menuBg.style.left = 0;
    openB.style.opacity = 0;
});
closeB.addEventListener('click', function(){
    menuBg.style.left = '-120vh';
    openB.style.opacity = 1;
});

