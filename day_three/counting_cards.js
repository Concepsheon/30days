var count = 0;

function cardCount(card) {
  // receive a card parameter and increment or decrement the global count variable according to the card's value
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  //The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

/* 
Example Output
"-3 Hold"
"5 Bet"
*/