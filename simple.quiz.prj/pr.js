const questions=[
  {
    question:"who is the founder of BTC?",answer:[{text:"obama", correct:false},
    {text:"satoshi", correct:true},
    {text:"tromp", correct:false},
    {text:"ahmadinezhad", correct:false}]
  },{
    question:"witch one is the analysis platform for traders",answer:[{text:"MQ4", correct:false},
    {text:"trading view", correct:false},
    {text:"1 and 2", correct:true},
    {text:"chatGBT", correct:false}]
  },{
    question:"witch one is a shetcoin",
    answer:[{text:"BTC", correct:false},
    {text:"ETH", correct:false},
    {text:"shiba", correct:true},
    {text:"solana", correct:false}]
  },{
    question:"witch one is one of the diffrences between spot and futures",answer:[{text:"margin", correct:false},
    {text:"levrage", correct:true},
    {text:"sl", correct:false},
    {text:"tp", correct:false}]
  }
];
const questionElement=document.getElementById("question");
const ansrbt=document.getElementById("answer-button");
const nxtbut =document.getElementById("next-btn");

let currentqindex=0;
let score=0;


function strtq(){
   currentqindex=0;
   score=0;
   nxtbut.innerHTML="next";
   showq();
}
function showq(){
  resetState();
  let currentq=questions[currentqindex];
  let questionno=currentqindex + 1;
  questionElement.innerHTML=questionno +"."+ currentq.question;

  currentq.answer.forEach(answer => {
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    ansrbt.appendChild(button);
    if(answer.correct)
    {
      button.dataset.correct=answer.correct;
      }
      button.addEventListener("click",selectanswer);
  })};

function resetState(){
  nxtbut.style.display="none";
  while (ansrbt.firstChild){
    ansrbt.removeChild(ansrbt.firstChild);}};

function selectanswer(e){
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.correct==="true";
  if(iscorrect){
    selectbtn.classList.add("correct");
    score++;
  }else{
    selectbtn.classList.add("incorrect");
  }
  Array.from(ansrbt.children).forEach(button=>{
    if(button.dataset.correct==="true")
    {
     button.classList.add("correct")
      }
      button.disabled=true;
  });
  nxtbut.style.display="block";}

  nxtbut.addEventListener("click",()=>{
  if(currentqindex < questions.length){
    handlenxtbut();
  }else{
    strtq();
  }
}); 

function showscore(){
  resetState();
 questionElement.innerHTML=`ur score is ${score} of ${questions.length}!`
  nxtbut.innerHTML="play again";
  nxtbut.style.display="block";
 };
function handlenxtbut(){
  currentqindex++;
  if (currentqindex < questions.length){
    showq();
  }else{
    showscore();
  }};
  strtq();