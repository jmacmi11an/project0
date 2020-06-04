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
  $('p#first').removeClass('first-player').removeClass('second-player').addClass('first-player').hide();
  $('p#second').removeClass('first-player').removeClass('second-player').addClass('second-player').hide();
  isReset = true;
  // $('aside').css('visibility', 'visible')
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
      reset();
      $('h1.results').text('Ugh, you both lose').css('visibility', 'visible')
      $('audio.draw')[0].play();
    }
    makeSomeNoise();
};



const makeSomeNoise = function(){
  if (isReset === false){
    if (!playerTurn){
      $(`audio.${player1.name}`)[Math.floor(Math.random() * 4)].play();
    } else {
      $(`audio.${player2.name}`)[Math.floor(Math.random() * 4)].play();
    }
  }
};

const winResult = function(){

  if (!playerTurn){
    $('h1.results').text(`${player1.winText}`).css('visibility', 'visible')
    player1.scoreboard += 1;
    $(`audio.${player1.name}-win`)[0].play();
  } else {
    $('h1.results').text(`${player2.winText}`).css('visibility', 'visible')
    player2.scoreboard += 1;
    $(`audio.${player2.name}-win`)[0].play();
  }
  $('aside').css('visibility', 'visible');
  $('aside.first-player h3').text(`${player1.name} wins`)
  $('aside p.first').text(`${player1.scoreboard}`).css('visibility', 'visible')
  $('aside.second-player h3').text(`${player2.name} wins`).css('visibility', 'visible')
  $('aside p.second').text(`${player2.scoreboard}`)
};




//
