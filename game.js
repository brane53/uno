function createGame() {
  let players = [];
  let deck = createDeck();
  let discardPile = [];
  let playerLimitMax = 4;
  let playerLimitMin = 2;
  let curentColor = '';
  
  let game = {
    position: true,
    players: players,
    deck: deck,
    discardPile: discardPile,
    playerLimitMax: playerLimitMax,
    playerLimitMin: playerLimitMin,
    currentColor: currentColor
  };
  
  return game;
};

function addPlayer(player, game){


};

function createPlayer(name){
  let player = {
    name: name, 
    hand: []
  }
  return player;
};




function createDeck() {
  let cardTypes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'skip', 'reverse', 'draw2', 'draw4', 'wild' ];
  let cardColors = ['red', 'blue', 'green', 'yellow'];
  let deck = [];
  // Loop through cardTypes array
  for (let i = 0; i < cardTypes.length; i++) {
    // Loop through cardColors array
    for (let j = 0; j < cardColors.length; j++) {
      
      let cardNumber;

      if (cardTypes[i] === 0 || cardTypes[i] === "draw4" || cardTypes[i] === "wild") {
        cardNumber = 1;
      } else {
        cardNumber = 2;
      }

      // Create 1 or 2 cards depending on the value of cardNumber
      for (let k = 0; k < cardNumber; k++) {
        deck.push(createCard(cardTypes[i], cardColors[j]))
      }
      
    }
  } 
  
  return deck;
};



function createCard(cardType, cardColor){
  let color = cardColor;

  if (cardType === 'draw4' || cardType === 'wild') {
    color = 'black';
  }
  let card = {
    value: cardType, 
    color: color,
    label: color + ' ' + cardType
  }

  return card;
};

let deck = createDeck();
console.log(deck)