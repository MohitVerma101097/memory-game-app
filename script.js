const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const cardArray = [
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
];

const cardsChosen = [];
const cardsChosenIds = [];

//sorting the cards randomly

const randomSort = () => {
  return Math.random() - 0.5;
};

cardArray.sort(randomSort);



const createBoard = () => {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

const checkMatch = () => {
  const cards = document.querySelectorAll('img');
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('you found a match!');
    increment()
    cards[cardsChosenIds[0]].setAttribute('src', 'img/white.png');
    cards[cardsChosenIds[1]].setAttribute('src', 'img/white.png');
    cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
    cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
    // Reset the chosen cards arrays
    cardsChosen.length = 0;
    cardsChosenIds.length = 0;
  } else {
    // If no match, flip the cards back after a delay
    setTimeout(() => {
      cards[cardsChosenIds[0]].setAttribute('src', 'img/blank.png');
      cards[cardsChosenIds[1]].setAttribute('src', 'img/blank.png');
      // Reset the chosen cards arrays
      cardsChosen.length = 0;
      cardsChosenIds.length = 0;
    }, 500);
  }
};

const increment = () => {
  resultDisplay.innerHTML++
  if (parseInt(resultDisplay.innerHTML) === 7) {
    prompt('Thank you for playing my game! Please leave feedback.');
  }
  
}


function flipCard () {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500)
  }
}

createBoard()

const playSound = () => {
  let audio = new Audio("/videoplayback.mp3");
  audio.play();
} 

playSound()