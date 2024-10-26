let toastbox=document.getElementById("toast-box");
let sucmsg='successfully submitted';
let ermsg='plz fix the error';
let invmsg='invalid';




function showt(msg){

  let toast=document.createElement("div");
  toast.classList.add('toast');
  toast.innerHTML= msg;
  toastbox.appendChild(toast);


  setTimeout(()=>{
    toast.remove()
  },6000);
}