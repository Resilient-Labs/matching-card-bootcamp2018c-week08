const cards = document.querySelectorAll('.card')

let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard

class UI {
  // Flip card
  flipCard() {
    if (lockBoard) return
    if (this === firstCard) return

    this.classList.add('flip')

    // If the card selected is selected then...
    if (!hasFlippedCard) {
      // change the value of the hasFlippedCard varaible
      hasFlippedCard = true
      firstCard = this

      return
    }

    // second click
    secondCard = this

    // Instantiate ui
    const ui = new UI()

    // Compare the two cards picked
    ui.checkForMatch()

  }

  // Compare the two cards picked
  checkForMatch() {
    let isMatch = firstCard.dataset.color === secondCard.dataset.color
    // If cards picked match then disable the click else if they do not match flip them back over
    isMatch ? this.disableCards() : this.unflipCards()
  }
  // Stop cards from being flipped
  disableCards() {
    // Instantiate ui
    const ui = new UI()
    firstCard.removeEventListener('click', ui.flipCard)
    secondCard.removeEventListener('click', ui.flipCard)


    ui.resetBoard()
  }

  unflipCards() {
    lockBoard = true

    setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')

      // Instantiate ui
      const ui = new UI()

      ui.resetBoard()
    }, 1500)
  }

  resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
  }


}

// Shuffle cards after each screen refresh
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos
  })
})()


// Instantiate ui
const ui = new UI()

// Event Listener to flip cards
cards.forEach(card => card.addEventListener('click', ui.flipCard))



