

// <div class="grid-x grid-padding-x">
//             <div class="large-6 medium-6 cell">
//               <div class="primary callout">
//                 <p class="impulse">impulse response [neurosonics 4]</p>
//                 <iframe src="https://player.vimeo.com/video/359321869" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
//               </div>
//             </div>

// const divElement = document.createElement('div'); //grid-padding-x ? Preserve original names for Foundation
// divElement.classList.add('grid-x grid-padding-x');

// const gridSize = document.createElement('div');
// gridSize.classList.add('primary callout');

// const primarycallout = document.createElement('div');
// primarycallout.classList.add(impulse);

// const iframe = document.createElement('iframe');
// // really should have a separate class for styling and link info
// iframe.setAttribute('src', "https://player.vimeo.com/video/359321869");

// divElement.appendChild(gridSize);
// gridSize.appendChild(primarycallout);
// primarycallout.appendChild(p);
// primarycallout.appendChild(iframe);
// document.querySelector('.impulse').textContent = "impulse response [neurosonics 4]";


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