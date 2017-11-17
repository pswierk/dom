//wyglad dokumentu - glownego obiektu DOM
//console.log(document.head);
//console.log(document.body);

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('link');
console.log(linki);

console.log(linki[1]);

var paragrafy = document.getElementsByTagName('p');
console.log(paragrafy);

var divPoId = document.querySelector('#parSecond');
console.log(divPoId);

var linkPoKlasie = document.querySelector ('#parFirst .link');
console.log(linkPoKlasie);

console.log(linkPoKlasie);

var pierwszaSekcja = document.getElementById('sectionFirst');
console.log(pierwszaSekcja.children);

console.log(pierwszaSekcja.children[2]);

console.log(pierwszaSekcja.firstChild);

console.log(pierwszaSekcja.lastChild);

var btn = document.createElement('button');

var btnTxt = document.createTextNode('Kliknij mnie');

var btnClass = document.createAttribute('class');
btnClass.value = 'btn';

document.body.appendChild(btn);

btn.appendChild(btnTxt);

btn.setAttributeNode(btnClass);

btn.setAttribute('title', 'jestem guzikiem');

btn.removeAttribute('title');

var atrrClass = btn.getAttributeNode('class');
btn.removeAttributeNode(atrrClass);

document.body.removeChild;

var header = document.getElementById('header');
console.log(header.innerHTML);
header.innerHTML = '<p>Nowa tresc w naglowku</p>';

console.log(header.outerHTML);

header.outerHTML = '<header id="header" class="klasa"><p>123123123</p></header>';

console.log(linki[2].href);
console.log(linki[2].className);


header.className = 'klasa_2 klasa_3';
console.log(header.className);

linki[2].href = 'http://google.com';
console.log(linki[2].href);

linki[2].title = 'tytul';
linki[2].className = 'klasa_2 klasa_3';







