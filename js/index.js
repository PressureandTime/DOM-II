// Your code goes here

const yellowBus = document.getElementById('bus');

yellowBus.addEventListener('click', () => {
  yellowBus.style.display = 'none';
});


const text = document.querySelector('.content-section .text-content:nth-child(1)');

// console.log(text);

text.addEventListener('mouseover', () => {
  text.style.backgroundColor = 'gray';
});


const contentSection = document.querySelector('.content-pick');


contentSection.addEventListener('mousedown', () => {
  contentSection.style.backgroundColor = 'blue';
});


const boatPhoto = document.getElementById('destination');

boatPhoto.addEventListener('dblclick', () => {
  boatPhoto.style.opacity = 0.3;
});


const biggerSection = document.querySelector('.content-section.inverse-content');
const imageContent = document.querySelector('.img-content');
const adventureAwaits = document.querySelector('.content-section.inverse-content .text-content p');


function function1() {
  adventureAwaits.textContent = adventureAwaits.textContent += 'HAVING FUN and ADDING BUNCH of new text and content and it adding and ADDING!';
}

function function2() {
  adventureAwaits.textContent = adventureAwaits.textContent = 'WHAT DO YOU BELIEVE IN !??';
}


imageContent.addEventListener('mouseenter', function1);
biggerSection.addEventListener('mouseup', function2);


const contentSection2 = document.querySelector('.content-pick .destination h4');

contentSection2.addEventListener('mousemove', () => {
  contentSection2.style.fontSize = '10rem';
});


const link = document.querySelector('.nav .nav-link:nth-child(1)');

link.addEventListener('click', event => event.preventDefault());


const biggerSection2 = document.querySelector('.content-pick');
const contentDiv = document.querySelector('.content-pick .destination:nth-child(even) p');


contentDiv.addEventListener('click', changeText1, true);
biggerSection2.addEventListener('click', changeText2, true);


function changeText1() {
  contentDiv.textContent = contentDiv.textContent += '  THAT ITS NOT FAIR! BUT I AM GOING FIRST BY DEFAULT(WHEN ITS FALSE)';
}

function changeText2() {
  contentDiv.textContent = contentDiv.textContent += 'YEAH, I KNOW YOU COME FIRST VERY OFTEN, WHEN ITS DEFAULT BUT YOU KNOW SOMETIMES I CAN BE FIRST...YOU NEVER KNOW :) LIKE THIS TIME...HAHAAHAHAH   ';
}


const footerOnly = document.querySelector('.footer');

console.log(footerOnly);

window.addEventListener('load', () => {
  footerOnly.style.backgroundColor = 'red';
});

window.addEventListener('scroll', (event) => {
  console.log(event.currentTarget.scrollY);
  if (event.currentTarget.scrollY > 320) {
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (event.currentTarget.scrollY < 320) {
    document.querySelector('body').style.backgroundColor = '';
  }
});
