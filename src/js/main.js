"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const divCounter = document.querySelector('.main__wrap--counter--js');
const btnAdd = document.querySelector('.main__button--add--js');
const btnRemove = document.querySelector('.main__button--remove--js');
let counter = 0;

divCounter.textContent = counter;
btnAdd.addEventListener('click', () => {
  console.log('dodaje');
  if (counter < 9) {
    counter++;
    divCounter.textContent = counter;
  }
})

btnRemove.addEventListener('click', () => {
  console.log('odejmuje');
  if (counter > 0) {
    counter--;
    divCounter.textContent = counter;
  }
})



console.log(`Hello world!`);