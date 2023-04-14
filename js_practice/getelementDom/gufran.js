const header = document.getElementById('gg');
console.log(header);

const erorrs = document.getElementsByClassName('error');
console.log(erorrs);

const peter = document.getElementsByTagName('p');
console.log(peter);

const ınnertext = document.querySelector('p');
console.log(ınnertext.innerText);

ınnertext.innerText = 'ı am changed'

const content = document.querySelector('.content');
console.log(content.innerHTML);

content.innerHTML = '<h2>ı am changed</h2>'