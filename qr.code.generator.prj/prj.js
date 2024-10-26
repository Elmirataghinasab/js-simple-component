let imgbox=document.getElementById("imgbox");
let text=document.getElementById("1011");
let qrimg =document.getElementById("qrimg");

 function mkqrcode(){
    qrimg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
}