/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activeScores;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// random section from no 1 to 6
// dice = Math.floor(Math.random() * 6) + 1; 

// document.querySelector('#current-' + activePlayer).textContent = dice;
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// selection through querySelector
document.querySelector('.dice').style.display = 'none';

// selection through ids
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3. update the round soure if the rolled number was not a 1
    if(dice !== 1){
        //addscores
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
       nextPlayer()
    }

})

document.querySelector('.btn-hold').addEventListener('click',function(){
    //add current score to global score
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

     //check if the player win the match
     if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
    }else{
        nextPlayer();
        
    }

   
   
})


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDom.style.display = 'none';
}