document.getElementById("Btn").onclick = function(){love_percentage()}

function love_percentage(){


let Your_Name = document.getElementById("Your_Name").value
let Patner_Name = document.getElementById("Patner_Name").value
let a = Your_Name.length;
let b = Patner_Name.length;
let add = a+b;
let sub = a-b;
let total = add+sub;
let div = b/2;
let min = total-div;
let per = (min*100)/total;

let stiker = `<img src="Css/Love-unscreen.gif" alt="Logo" width="100px" height="100px" class="heading center" style="align-items: center;" id="imgage"> `
let percentage = `<div class="percentage" id="pencent">45</div>`
document.getElementById("01").insertAdjacentHTML("afterend" , stiker)
document.getElementById("02").insertAdjacentHTML("afterend" , percentage)
document.getElementById("pencent").innerHTML = per+" %"
if(per<50){
    document.getElementById("imgage").src = "Css/Sorry-unscreen.gif"
}
if(50<per<80){
    document.getElementById("imgage").src = "Css/Love-2--unscreen.gif"
}
if(Your_Name!=""){
    document.getElementById("Your_Name").disabled = true;
}

if(Patner_Name!=""){
    document.getElementById("Patner_Name").disabled = true;
}
}

