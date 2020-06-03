const resetArrays = function(){
  return [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["a", "d", "g"],
    ["b", "e", "h"],
    ["c", "f", "i"],
    ["a", "e", "i"],
    ["c", "e", "g"],
  ];
}  //this resets the playerArrays for a new game
let boxes = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  count: 0                    // all possible guesses
};

let player1Win = resetArrays();
let player2Win = resetArrays();
let playerTurn = true;            //this just makes sure each new choice is a new player.
let isReset = true;

//tested and works - this makes sure the box is empty before it's altered.
const isEmpty = function(string){
  if (boxes[string] !== 0){
    return false;
  } else {
    boxes[string] = 1;
    boxes.count+= 1;
    return true;
  }
}

//this is a function that runs after there is a win or draw
const reset = function(){
  player1Win = resetArrays();
  player2Win = resetArrays();
  boxes = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    count: 0
  };
  $('button').css('visibility', 'visible');
  $('img').removeClass('morty').removeClass('rick').css('visibility', 'hidden');
  // $('div p').css('visibility', 'hidden');
  $('p#morty').removeClass('first-player').removeClass('second-player').addClass('first-player').hide(); //if this bugs, add a removeClass
  $('p#rick').removeClass('first-player').removeClass('second-player').addClass('second-player').hide();
  isReset = true;
};

// this is a function that determines if a player has won
const determineWin = function(array, box){
    for (let i = 0; i <array.length; i++){          //iterate across the winArray
      let winArray = array[i];                        //define a single possible win path
      for (let j = 0; j < winArray.length; j++){      //iterate across the win path
        if (winArray[j] === box){                     // check if most recent box was in win path
          winArray.splice(j, 1);                    // if so, delete ticked box from win path
          if (winArray.length === 0){               // if the winpath is empty that triggers a win.
            reset();
            winResult();
          }
        }
      }
    }
    if (9 === boxes.count && isReset === false){
      reset(); //here is the problem
      $('h1.results').text('Ugh, you both lose').css('visibility', 'visible')
      $('audio.draw')[0].play();              //here's where to add the draw graphic
    }
    makeSomeNoise();
};


const makeSomeNoise = function(){
  if (isReset === false){
    if (!playerTurn){
      $('audio.first-player')[Math.floor(Math.random() * 4)].play();
    } else {
      $('audio.second-player')[Math.floor(Math.random() * 4)].play();
    }
  }
};

const winResult = function(){
  if (!playerTurn){
    $('h1.results').text('Morty Wins').css('visibility', 'visible')
    $('audio.morty-win')[0].play();
  } else {
    $('h1.results').text('Rick Wins').css('visibility', 'visible')
    $('audio.rick-win')[0].play();
  }
};


//
// if (boxes.count === 9){
//   $('audio.draw')[0].delay(800).play();
//   // alert("it's a draw");
//   reset();
// }



//note for tomorrow - you may want to always reset and alert outside of the above function and inside of the dom function



// if (boxes.count === 9){
//   reset();
//   $('audio.draw')[0].play();              //here's where to add the draw graphic
// } else {



//
