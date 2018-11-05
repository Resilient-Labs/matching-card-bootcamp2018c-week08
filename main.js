// const cards = document.querySelectorAll('.memoryCard');
//
// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('click', function(e){
//     e.preventDefault()
//     console.log(i);
//   });
// }
const cards = document.querySelectorAll('.memoryCard');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
  this.classList.toggle('flip');

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = this;

    //do the cards match??
    
  }
}

cards.forEach(card => card.addEventListener('click', flipCard))

;
