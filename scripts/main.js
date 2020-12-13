// const flky = new Flickity(".feedback__list", {
//   cellAlign: "center",
//   freeScroll: true,
//   wrapAround: false,
// });

const utils = window.fizzyUIUtils;

const carousel = document.querySelector(".feedback__list");
const flkty = new Flickity(carousel, {
    
  prevNextButtons: false,
  pageDots: false,
});
// // elements
// const cellsButtonGroup = document.querySelector('.button-group--cells');
// const cellsButtons = utils.makeArray( cellsButtonGroup.children );

// // update buttons on select
// flkty.on( 'select', function() {
//   const previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
//   const selectedButton = cellsButtonGroup.children[ flkty.selectedIndex ];
//   previousSelectedButton.classList.remove('is-selected');
//   selectedButton.classList.add('is-selected');
// });

//count
const itemList = document.querySelectorAll(".feedback__item");
const field = document.querySelector(".slider__page-count");

let count = 1

// setCount = (list) => {

//   console.log(result);
// };
// previous
const previousButton = document.querySelector(".button--previous");
previousButton.addEventListener("click", function () {
  flkty.previous();
  if(count !== 1){
    count--
    field.innerHTML = `${count} / ${itemList.length}`;
  }
});
// next
const nextButton = document.querySelector(".button--next");
nextButton.addEventListener("click", function () {
  flkty.next();
  if(count !== 6){
    count++
    field.innerHTML = `${count} / ${itemList.length}`;
  }

});
