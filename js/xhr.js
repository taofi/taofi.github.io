const requestURL = 'https://raw.githubusercontent.com/taofi/course-cinema/master/json/film.json';




let film, 
    hashA,
    nameF = document.getElementById('name'),
    nameF2 = document.getElementById('name2'),
    shortReview = document.getElementById('shortReview'),
    posterImg = document.getElementById('posterImg'),
    genre = document.getElementById('genre'),
    review = document.getElementById('review'),
    thrillerVid = document.getElementById('thrillerVid');
    let load = document.getElementById('loading');

    posterImg.addEventListener('load', function() {
        load.style.transition = "0.2s";
        load.style.opacity = '0';
        load.style.zIndex = '-4';
    });

 
function openJson(){
   
    load.style.transition = "0";
    load.style.opacity = '1';
    load.style.zIndex = '500';

    hashA = window.location.hash.substring(1)
    const xhr = new XMLHttpRequest
    xhr.open('GET', requestURL)
    
    xhr.responseType = 'json'


    xhr.onload = () => {
    let loadError = document.getElementById('loadingError');
    if(loadError != null)
         loadError.remove();
    document.getElementById('bodyid').style.overflow = 'auto'
    film = xhr.response;
    console.log(film);
    let index;
    let isFound = false;
    for( index in film){
       // console.log(film[index].id)
        if(hashA == film[index].id){
           // console.log(hashA)
            isFound = true;
            break
        }
    }
    if(!isFound){
        let wrap = document.getElementById('wrap');
        let error404div = document.createElement("div");
        error404div.id ='error404';
        error404div.textContent = 'error 404 page not found';
        wrap.appendChild(error404div);
        document.getElementById('bodyid').style.overflow = 'hidden'
    }else{
        let error404div = document.getElementById('error404');
        if(error404div != null)
            error404div.remove();
        document.getElementById('bodyid').style.overflow = 'auto'
    }
    //console.log(film[index])
    nameF.textContent = film[index].name
    nameF2.textContent = film[index].name2
    shortReview.textContent = film[index].shortReview
    posterImg.src = film[index].posterImg
    genre.textContent = film[index].genre
    review.textContent = film[index].review
    thrillerVid.src = film[index].thrillerURL
    if(film[index].soon == "1"){
        document.getElementById('formHref').style.display = 'none';
    }
    else{
        document.getElementById('formHref').style.display = '';
    }
    document.getElementById('formHref').href = "forma.html#" + hashA;
    }

    xhr.onerror = () =>{
        let wrap = document.getElementById('wrap');
        let loadError = document.createElement("div");
        loadError.id ='loadingError';
        loadError.textContent = 'there may be problems with the server or internet connection';
        wrap.appendChild(loadError);
        document.getElementById('bodyid').style.overflow = 'hidden';
    console.error(xhr.response)
    }
   
    xhr.send()
}




openJson();
window.addEventListener('hashchange', openJson);