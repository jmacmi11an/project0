$(document).ready(function(){


// $('.second-player').hide();

// the game starts:
// button visible
// paragraphs invisible
// #morty class first player
// rick class second players
// images invisible

$('button').on('click', function(){
  $(this).css('visibility', 'hidden');
  $('p').css('visibility', 'visible');
  $('p#morty').css('visibility', 'visible').show();
  $('p.second-player').hide();
  $('img').css('visibility', 'visible');
})



//this goes in the below
// $('.first-player, .second-player').toggle(200);


  $('img').click(function(){
    let box = $(this).attr("id");                     // box is now a string of a character a-i
    if (isEmpty(box)){                                 // check if the box has been ticked yet.
      $('.first-player, .second-player').toggle(200);         //NEW TEST
      if (playerTurn){                                  // See if it's Morty's turn
        $(this).addClass('morty');
        playerTurn = false;                             // change who's turn it is
        determineWin(player1Win, box);                  // run the win check function
      } else {
        $(this).addClass('rick');
        determineWin(player2Win, box);
        playerTurn = true;
      }
    } else {
      if (isEmpty(box) === false){
        console.log("you already selected that box");
      }
    }
    if (boxes.count === 9){
      alert("it's a draw");
      reset();
    }
  });






});
