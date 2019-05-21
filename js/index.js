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

boatPhoto.addEventListener('dblclick', () => {boatPhoto.style.opacity = 0.3; });



const biggerSection = document.querySelector('.content-section.inverse-content');
//  console.log(biggerSection);
const imageContent = document.querySelector('.img-content');
const adventureAwaits = document.querySelector('.content-section.inverse-content .text-content p');




function function1(){
    adventureAwaits.textContent = adventureAwaits.textContent += "HAVING FUN and ADDING BUNCH of new text and content and it adding and ADDING!"
 };
 
 function function2(){
     adventureAwaits.textContent = adventureAwaits.textContent = "WHAT DO YOU BELIEVE IN !??"

 };
 


imageContent.addEventListener('mouseenter', function1);
biggerSection.addEventListener('mouseup', function2);



const contentSection2 = document.querySelector('.content-pick .destination h4');

contentSection2.addEventListener('mousemove', () =>{contentSection2.style.fontSize = '10rem'; });


 const contentSection3 = document.querySelector('.content-pick .destination:nth-child(3) p');

 contentSection3.addEventListener('resize', () => {contentSection3.style.color = 'red';});
