// DOM Elements
const dropdownButton = document.querySelectorAll('.dropdown__button');
const dropdownList = document.querySelectorAll('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
// Functions

function toggleHidden(element) {
  element.classList.toggle('hidden');
}

// Event Listeners

// Clicking dropdown button opens closest dropdown
dropdownButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    let container = e.target.closest('.dropdown__container');
    let list = container.querySelector('.dropdown__list');
    toggleHidden(list);
  });
});

// Clicking list item closes dropdown menu
dropdownItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    let container = e.target.closest('.dropdown__container');
    let list = container.querySelector('.dropdown__list');
    toggleHidden(list);
  });
});

module.exports = { toggleHidden };
