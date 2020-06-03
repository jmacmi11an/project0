$(document).ready(function(){



$('button').on('click', function(){
  playerTurn = true;
  $(this).css('visibility', 'hidden');
  $('p').css('visibility', 'visible');
  $('p#morty').css('visibility', 'visible').show();
  $('p.second-player').hide();
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
        $(this).addClass('morty');
        determineWin(player1Win, box);                  // run the win check function
      } else {
        playerTurn = true;
        $(this).addClass('rick');
        determineWin(player2Win, box);
      }
    } else {
      if (isEmpty(box) === false){
      console.log("you already selected that box");
      }
    }
  });




});
