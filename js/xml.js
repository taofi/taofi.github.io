const xhr = new XMLHttpRequest();
const requestURL = "https://raw.githubusercontent.com/taofi/course-cinema/master/xml/clients.xml";

xhr.open('GET', "../xml/clients.xml", false);
xhr.send();

let xmlData = xhr;
xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml");
console.log(xhr.response);
let customers = xmlData.getElementsByTagName("customer")[0].getElementsByTagName("hash")[0].childNodes[0];
console.log(customers);
customers.textContent = "green";
var xmlString = new XMLSerializer().serializeToString(xmlData);
/*if(!xmlData){
    xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml");
    
    let customers = xmlData.getElementsByTagName("customer");
    console.log(customers);
}*/
console.log(xmlString);
let xhr2 = new XMLHttpRequest();

// Устанавливаем метод запроса на POST
xhr2.open("POST", "../xml/clients.xml", true);

// Устанавливаем заголовок Content-Type на text/xml
xhr2.setRequestHeader("Content-Type", "text/xml");

// Отправляем XML-файл на сервер
xhr2.send(xmlString);