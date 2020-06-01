console.log("I'm here too bitches!")

const win = [
  ["abc"],
  ["def"],
  ["ghi"],
  ["adg"],
  ["beh"],
  ["cfi"],
  ["aei"],
  ["ceg"],
];
const boxes = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0
}; // all possible guesses


let firstPlayer = [];  //first player guesses
let secondPlayer = []; //second player guesses

let playerTurn = true;    //this just makes sure each new choice is a new player


const isEmpty = function(string){
  if (boxes.string !== 0){
    return false;
  } else {
    boxes.string = 1;
    return true;
  }
}


// const currentChoice = function(letter, player){ //
//   player.choices.push(letter);
// }





// const sortedChoices = function(array){ //this returns an array of alphabetized strings
//   return array.sort();
// }



//when one of the 9 buttons is pressed




$('button').click(function(){
  let box = $(this).attr("id");               // box is now a string of a character a-i
  if (isEmpty(box)){                          // check if the box has been ticked yet.
    if (playerTurn){                          // check to see who's turn
      firstPlayer.push(box);                  // add the square to the player array
      determineWin(firstPlayer);              // run the win check function
      playerTurn = false;                     // change who's turn it is
    } else {
      secondPlayer.push(box);
      determineWin(secondPlayer);
      playerTurn = true;
    }
    console.log(`first player choices ${firstPlayer}, second player choices ${secondPlayer}.`)
  };


    console.log("You've already checked that box")
})



const determineWin = function(array){
  array.sort();                            //alphabetize the array
  array.toString("");                      //turn the array into a string
  if (array.length === 3){                    //make sure array is long enough
    for (let i = 0; i < win.length; i++) {          //iterate across the "win" array
      if (array !== win[i]){
        console.log("keep playing");
      } else {
        console.log(`you win! ${firstPlayer}: ${secondPlayer}`);
      }
    }
  }
}



// //add event listeners
// $('button').click(function(){     //first attempt to get the id string from a button press
//   if (playerTurn){
//     firstPlayer.push($(this).attr("id"));
//     playerTurn = false;
//   } else {
//     secondPlayer.push($(this).attr("id"));
//     playerTurn = true;
//   }
//   alert (`first player choices ${firstPlayer}, second player choices ${secondPlayer}.`)
// })
