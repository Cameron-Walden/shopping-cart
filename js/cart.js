/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// Come back to this
// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBodyElem = document.getElementById('tbody');
  tableBodyElem.innerHTML = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  let tableBodyElem = document.getElementById('tbody');
  for(let item of cart.items) {
    let tableRowElem = document.createElement('tr')
    tableBodyElem.appendChild(tableRowElem);

    let tableDataDelete = document.createElement('td');
    tableDataDelete.textContent = 'DELETE';
    tableDataDelete.id = `${item.product}`;
    tableRowElem.appendChild(tableDataDelete);

    let tableDataQuantity = document.createElement('td');
    tableDataQuantity.textContent = 'QUANTITY';
    tableDataQuantity.id = `${item.quantity}`;
    tableRowElem.appendChild(tableDataQuantity);

    let tableDataItem = document.createElement('td');
    tableDataItem.textContent = 'ITEM';
    tableDataItem.id = `${item.items}`;
    tableRowElem.appendChild(tableDataItem);
  }
  // DONE: Find the table body
  /// ------------------ querySelector ---------------------------///

  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
  renderCart();
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();