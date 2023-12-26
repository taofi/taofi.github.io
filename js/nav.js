const nav = document.getElementsByTagName('nav')[0];
let currentNavHeight = nav.offsetHeight;

window.addEventListener('resize', function(){
    currentNavHeight = 70;
    if(767 > window.innerWidth)
        currentNavHeight = 50;
    if(550 > window.innerWidth)
        currentNavHeight = 45;
    if(420 > window.innerWidth)
        currentNavHeight = 35;
    if(this.scrollY > 10)
        nav.style.height = currentNavHeight / 1.5 + 'px';
});

window.addEventListener('scroll', function() {
    if(this.scrollY > 10)
    {
        nav.style.backgroundColor = "#FB9D11";
        nav.style.height = currentNavHeight / 1.5 + 'px';
    }else
    {
        nav.style.removeProperty('height');
        nav.style.backgroundColor = '';
    }
  });