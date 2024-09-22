let addbtn=document.getElementById("btnAdd");
let Minusbtn=document.getElementById("btnMinus");
let counter=0;
let colors=["red", "green", "blue"];


addbtn.onclick=function(){
    counter++;
    let ourText=document.getElementById("ourText");
    ourText.innerText=counter;
    ourText.style.color=colors[counter % 3];
    //("add btn click");
};
//console.log(Minusbtn)
Minusbtn.onclick=function() {
    if(counter == 0) return;
    counter--;
    let ourText=document.getElementById("ourText");
    ourText.innerText=counter;
    ourText.style.color=colors[counter % 3];
    //console.log("minus btn click");
};