// const container = document.querySelector('.container');
// // console.log(container);
// const body = document.querySelector('body');

// container.addEventListener('click', () => {
//     const newElement = createNewElement('p', 'This is super cool');
//     container.appendChild(newElement);
// });

// function createNewElement(tagName, text) {
//     const newElement = document.createElement(tagName);
//     newElement.textContent = text;
//     return newElement;
// }

// const card = createNewElement('div', 'My new card');
// card.classList.add('card'); // how to add a class to a DOM object
// card.style.height = '300px';
// // console.log(card); 
// const cardText = createNewElement('p', 'Here is some random card text.');
// cardText.classList.add('card-title');
// // append cardText to card
// card.appendChild(cardText); // keep track of child-parent tag relationships

// const link = createNewElement('a', 'General Assembly');
// link.classList.add('btn', 'btn-primary'); 
// // append link to card
// link.setAttribute('href', 'https://www.generalassemb.ly')
// card.appendChild(link);
// // append the card to the body of the page
// body.appendChild(card);