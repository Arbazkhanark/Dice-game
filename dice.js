'use strict'


//selecting elements
const player1=document.querySelector('.p1');
const player2=document.querySelector('.p2');

const current_score1=document.querySelector('.cs1');
const current_score2=document.querySelector('.cs2');

const roll= document.querySelector('.roll');

const hs1= document.querySelector('.hs1');
const hs2=document.querySelector('.hs2');

const dice=document.querySelector('.img');

const dice_img=document.querySelector('.dice_roll');
const hold=document.querySelector('.hold');


//starting conditions
hs1.textContent=0;
hs2.textContent=0;
dice_img.classList.add('hidden');

//starting
const switchPlayer= function(){   
    document.querySelector(`.cs${activePlayer}`).textContent= 0;
    activePlayer= activePlayer ==1?2:1;
    current_score=0;

    player1.classList.toggle('active');
    player2.classList.toggle('active');
};



let current_score=0;
const score=[0,0];
let activePlayer=1;
//Rolling dice functionality
roll.addEventListener('click', function(){
    console.log('Checked');
    const rand=Math.trunc(Math.random()*6)+1;
    console.log(rand);
    // current_score1.textContent=rand;

//Display dice
dice_img.classList.remove('hidden');
dice_img.src=`/img/img${roll}.png`;


//Check for rolled 1: if true, switch to next player   
if(rand !== 1){
    //add current score and add dice roll(random number)
    current_score+=rand;
    
    document.querySelector(`.cs${activePlayer}`).textContent= current_score;
    // current_score1.textContent = current_score;
}else{
    //switch to next player
    switchPlayer();
}
});


//if player push the hold button to store his score in hold label;
hold.addEventListener('click' , function(){
    //add current score to active player's score;
    score[activePlayer] +=current_score;
    //score[1]=score[1]+current_score;
    let hold_score=document.querySelector(`.hs${activePlayer}`).textContent=current_score;

   
    //check if player's score is >=100;
    if(hold_score>=100){

    }else{

        //finish the game

        //Switch to the next player
        switchPlayer();
    }


    

    
    
});


