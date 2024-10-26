const passwordBox= document.getElementById("password");
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnoqrstuvwxyz";
const numbers="123456789";
const symbols="@!$#-&*~(){}[]<>/+=|_";
const allchars= uppercase+lowercase+symbols+numbers;



function creatPs(){
  let password="";
  password+= uppercase[Math.floor(Math.random()*uppercase.length)];
  password+= lowercase[Math.floor(Math.random()*lowercase.length)];
  password+= numbers[Math.floor(Math.random()*numbers.length)];
  password+= symbols[Math.floor(Math.random()*symbols.length)];
  while(length>password.length){
    password+= allchars[Math.floor(Math.random()*allchars.length)];
  }
  passwordBox.value = password;
}
function copypss(){
 passwordBox.select();
 document.execCommand("copy");
}
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
  creatPs();});
  