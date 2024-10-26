const api_url="https://api.quotable.io/random";
const quote= document.getElementById("1010");
const author=document.getElementById("1011");







async function gtq(url){
const response= await fetch(url);
var data= await response.json();
quote.innerHTML=data.content;
author.innerHTML=data.author;
};


function twt(){
window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"---by"+author.innerHTML,"tweet window")}