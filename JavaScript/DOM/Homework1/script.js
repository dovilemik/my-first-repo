
// Užduotis 1 - Teksto ir stiliaus keitimas

const paragraph = document.getElementById('paragraph1');
if(paragraph) {
    paragraph.innerText = 'New text for paragraph';
}

const divSection = document.querySelector('.section');
if (divSection) {
divSection.innerHTML = '<p>New Content</p>'
divSection.style.color = 'coral';
}

const header1 = document.getElementsByTagName('h1');
if(header1.length > 0) {
    header1[0].textContent = 'Updated H1 text';
}