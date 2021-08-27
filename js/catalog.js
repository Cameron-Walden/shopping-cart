/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
/// ----------------------------- cart is and instance of a CART -------------------////
/// ------------------- use cmd/ctl f to look for words in your code ------------------///

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.


function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let product in Product.allProducts) {
    let optionTagElem = document.createElement('option')
    optionTagElem.textContent = `${Product.allProducts[product].name}`;
    selectElement.appendChild(optionTagElem);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // DONE: Prevent the page from reloading  
  /// --------------- at this point you know which item was picked from the list, how many ----------- ///
  // Do all the things ...
  addSelectedItemToCart();
  // you can theoretically add parameters/arguments to a function being called
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// DONE: Add the selected item and quantity to the cart
let selectedItemsElem = document.getElementById('items');
let getQuanityElem = document.getElementById('quantity');

function addSelectedItemToCart() {
  cart.addItem(selectedItemsElem.value, getQuanityElem.value)
  // DONE: suss out the item picked from the select list
  // DONE: get the quantity
  // DONE: using those, add one item to the Cart
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCounterElem = document.getElementById('itemCount');
  let itemCounter = cart.items.length;
  itemCounterElem.textContent = `${itemCounter}`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let itemOrdered = selectedItemsElem.value;
  let quantityOrdered = getQuanityElem.value;
  let cartPreviewElem = document.getElementById('cartContents');
  for(let product of Product.allProducts) {
    if(itemOrdered === product.name) {
      let imgElem = document.createElement('img');
      imgElem.src = product.filePath;
      imgElem.classList.add('small')
      cartPreviewElem.appendChild(imgElem);
      let pElem = document.createElement('p')
      pElem.textContent = `${quantityOrdered}`;
      cartPreviewElem.appendChild(pElem);
    }
  }
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();