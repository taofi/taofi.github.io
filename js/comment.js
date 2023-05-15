const comBt = document.getElementById('comBt');
const comText = document.getElementById('comText');
const commentCont = document.getElementById('commentCont');

comBt.addEventListener('click', commentSend);
function commentSend(){
    let text = comText.value;
    if(text != '')
    {
        let comDiv = document.createElement('div');
        let textP = document.createElement('p');
        let imgC = document.createElement('img');
        imgC.src = '../images/person-circle.svg';
        textP.textContent = text;
        comDiv.className ='comment';
        commentCont.appendChild(comDiv);
        comDiv.appendChild(imgC);
        comDiv.appendChild(textP);
        comText.value = '';
    }
    

}