let score = JSON.parse(localStorage.getItem('score'))||{ wins:0,
  loses:0,
  ties:0
};
/* if (!score){
  wins:0 ,
  loses:0,
  ties:0
};*/

updatescoreelement();


function updatescoreelement(){
document.querySelector('.js-score').innerHTML = `win:${score.wins}, ties:${score.ties}, loses:${score.loses}`;
}


function pickcomputerMove(){
let camputeerMove='';
let result='';
const randomNumber = Math.random();
if (randomNumber>=0  && randomNumber <1/3)
{camputeerMove ='rock';
}else if (randomNumber>=1/3  && randomNumber <2/3)
{camputeerMove='paper';
}else if (randomNumber>=2/3  && randomNumber <1)
{camputeerMove ='scissors';}
return camputeerMove;}

let isautoplying = false;
let interval;
function autoplay(){
  if (!isautoplying){
interval=setInterval(function(){
const playerMove = pickcomputerMove();
playgame(playerMove);
},1000);
isautoplying=true;}
else {
  clearInterval(interval);
  isautoplying=false;
}}
function playgame (playerMove){
const camputeerMove = pickcomputerMove();
let result = '';
if (playerMove=== 'scissors'){
  if (camputeerMove ==='rock'){
     result ='u lose';
        }else if (camputeerMove ==='paper'){
          result ='you win';
            }else if (camputeerMove ==='scissors'){
               result ='tie.';}
  }
  else if (playerMove==='paper'){
          if (camputeerMove ==='rock'){
            result ='you win';
              }else if (camputeerMove ==='paper'){
                 result ='tie.';
                    }else if (camputeerMove ==='scissors'){
                       result ='u lose';}
  }
  else if (playerMove==='rock'){
     if (camputeerMove ==='rock'){
         result ='tie.';
            }else if (camputeerMove ==='paper'){
                result ='u lose';
                  }else if (camputeerMove ==='scissors'){
                     result ='you win';}
  }
      if (result==='tie.'){
        score.ties+=1;}
        else if (result==='u lose'){
          score.loses+=1;}
          else if (result==='you win'){
            score.wins+=1;}
    
            localStorage.setItem('score',JSON.stringify(score));
            
            updatescoreelement();

            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector('.js-moves')
            .innerHTML =`you <img class="emoji" src="imgs/${playerMove}-emoji.png"><img class="emoji" src="imgs/${camputeerMove}-emoji.png">computer` ;
          }
  
