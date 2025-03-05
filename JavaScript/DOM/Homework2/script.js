
// Užduotis 2 - EventListeners ir dinamiška DOM manipuliacija

const body = document.getElementById('body');

const firstParagraph = document.getElementById("first");
const secondParagraph = document.getElementById("second");
const thirdParagraph = document.getElementById("third");

const newfirstParagraph = document.createElement('p');
newfirstParagraph.innerText = 'Naujas pirmas paragrafas';
newfirstParagraph.style.color = 'coral';
newfirstParagraph.style.fontSize = '20px';
newfirstParagraph.style.fontFamily= 'cursive';

const newsecondParagraph = document.createElement('h2');
newsecondParagraph.innerText = 'Naujas antras paragrafas - H2';
newsecondParagraph.style.color = 'red'

const newthirdParagraph = document.createElement('div');
newthirdParagraph.innerText = 'Naujas trečias paragrafas - div';
newthirdParagraph.style.fontStyle = 'italic';

body.replaceChild(newfirstParagraph, firstParagraph);
body.replaceChild(newsecondParagraph, secondParagraph);
body.replaceChild(newthirdParagraph, thirdParagraph);