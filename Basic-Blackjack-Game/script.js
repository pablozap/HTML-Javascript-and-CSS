let card = 0, hasBlackJack = false, isAlive = true, message = "", sum = 0; 
let player = {
  name: "Per",
  chips: 145, 
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function RenderGame() {
  if (isAlive == true){
    sum += GetRandomCard();
    console.log(sum);
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You`ve got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "Sorry, you`re out of the game!";
    isAlive = false;
  }
  console.log(message);
  document.getElementById("sum-el").textContent = sum;
  document.getElementById("message-el").textContent = message;
  document.getElementById("cards-el").textContent += " " + card;
  }

}
function NewCard() {
  RenderGame();
}
function GetRandomCard() {
  card = Math.floor(Math.random() * 11) + 1;
  if (card == 0){
    console.log(card);
    return GetRandomCard();
  } if (card == 1){
    console.log(card);
    return card = 11;
  } else { 
    return card;
  }

}

