let player1 = ""
let player2 = ""


$(document).ready(function(){


$('button#rick').on('click', function(){
  $(this).css('color', '#cbe261')
  if (player1 === ""){
    player1 = rick;
  } else if (player2 === ""){
    player2 = rick;
    $('div.characters button').hide()
    $('p#characters').hide()
    $('button#start').css('visibility', 'visible');
  }
});
$('button#morty').on('click', function(){
  $(this).css('color', '#cbe261')
  if (player1 === ""){
    player1 = morty;
  } else if (player2 === ""){
    player2 = morty;
    $('div.characters button').hide()
    $('p#characters').hide()
    $('button#start').css('visibility', 'visible');
  }
});
$('button#meeseeks').on('click', function(){
  $(this).css('color', '#cbe261')
  if (player1 === ""){
    player1 = meeseeks;
  } else if (player2 === ""){
    player2 = meeseeks;
    $('div.characters button').hide()
    $('p#characters').hide()
    $('button#start').css('visibility', 'visible');
  }
});
$('button#summer').on('click', function(){
  $(this).css('color', '#cbe261')
  if (player1 === ""){
    player1 = summer;
  } else if (player2 === ""){
    player2 = summer;
    $('div.characters button').hide()
    $('p#characters').hide()
    $('button#start').css('visibility', 'visible');
  }
});
$('button#jerry').on('click', function(){
  $(this).css('color', '#cbe261')
  if (player1 === ""){
    player1 = jerry;
  } else if (player2 === ""){
    player2 = jerry;
    $('div.characters button').hide()
    $('p#characters').hide()
    $('button#start').css('visibility', 'visible');
  }
});



$('button#start').on('click', function(){
  playerTurn = true;
  $('img').removeClass(`${player1.name}`).removeClass(`${player2.name}`).css('visibility', 'hidden');
  $(this).css('visibility', 'hidden');
  $('p').css('visibility', 'visible');
  $('p#first').css('visibility', 'visible').text(`${player1.yourTurn}`).show();
  $('p.second-player').text(`${player2.yourTurn}`).hide();
  $('img').css('visibility', 'visible');
  $('h1.results').css('visibility', 'hidden')
  isReset = false;
})



  $('img').click(function(){
    let box = $(this).attr("id");                     // box is now a string of a character a-i
    if (isEmpty(box)){                                 // check if the box has been ticked yet.
      $('p.first-player, p.second-player').toggle();      // this changes the player paragraph class.
      if (playerTurn){                                  // See if it's Morty's turn
        playerTurn = false;                             // change who's turn it is
        $(this).addClass(`${player1.name}`);
        determineWin(player1Win, box);                  // run the win check function
      } else {
        playerTurn = true;
        $(this).addClass(`${player2.name}`);
        determineWin(player2Win, box);
      }
    } else {
      if (isEmpty(box) === false){
      console.log("you already selected that box");
      }
    }
  });





});
