const notescontain=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".inputbox");


function shownts(){
  notescontain.innerHTML= localStorage.getItem("note");
}
 
shownts();

function uptadestorge(){
  localStorage.setItem("note", notescontain.innerHTML);
}

createbtn.addEventListener("click",()=>{
  let inputbox=document.createElement("p");
  let img=document.createElement("img");
  inputbox.className="inputbox";
  inputbox.setAttribute("contenteditable","true");
  img.src="images/delete.png";
  notescontain.appendChild(inputbox).appendChild(img);
});
  

notescontain.addEventListener("click",function(e){
  if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    uptadestorge();
  }
  else if (e.target.tagName==="P"){
    notes=document.querySelectorAll(".inputbox");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        uptadestorge();
      }
    })
  }
})

document.addEventListener("keydown",Event=>{
  if(Event.key==="Enter"){
    document.execCommand("insertLinebreak");
    Event.preventDefault();
  }
})



