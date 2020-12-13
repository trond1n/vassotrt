//константы
const utils = window.fizzyUIUtils;

const carousel = document.querySelector(".feedback__list");
const flkty = new Flickity(carousel, {
  prevNextButtons: false,
  pageDots: false,
});
const cellsButtonGroup = document.querySelector(".button-group--cells");
const cellsButtons = utils.makeArray(cellsButtonGroup.children);


//счетчик
const itemList = document.querySelectorAll(".feedback__item");
const field = document.querySelector(".slider__page-count");
let count = 1;

// кругляши
flkty.on("select", function () {
  const previousSelectedButton = cellsButtonGroup.querySelector(
    ".is-selected_paginate"
  );
  const selectedButton = cellsButtonGroup.children[flkty.selectedIndex];
  previousSelectedButton.classList.remove("is-selected_paginate");
  selectedButton.classList.add("is-selected_paginate");
});

cellsButtonGroup.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, ".pagination__button")) {
    return;
  }
  var index = cellsButtons.indexOf(event.target);
  flkty.select(index);
});


// кнопка пред
const previousButton = document.querySelector(".button--previous");
previousButton.addEventListener("click", function () {
  flkty.previous();
  if (count !== 1) {
    count--;
    field.innerHTML = `${count} / ${itemList.length}`;
  }
});
// кнопка нэкст
const nextButton = document.querySelector(".button--next");
nextButton.addEventListener("click", function () {
  flkty.next();
  if (count !== 6) {
    count++;
    field.innerHTML = `${count} / ${itemList.length}`;
  }
});
