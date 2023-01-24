document.getElementById("Change_button").onclick = function(){change_language()}

document.getElementById('Copy_Button').onclick = function(){copy()}
function copy(){
  
    
    let popup = document.getElementById("popup")
    let copyText = document.getElementById("Final01")
    navigator.clipboard.writeText(copyText.innerHTML);
    if(copyText.innerHTML !=""){
        popup.classList.add("open-popup")
        clearTimeout(time_id)}
    
}



function change_language(){
let Note = document.getElementById("floatingInput").value
const Spy_note ={ "A" : "O2F",
"B" : "C3B",
"C" : "G54",
"D" : "HJK",
"E" : "K5F",
"F" : "PKL",
"G" : "PO5",
"H" : "YUR",
"I" : "KD2",
"J" : "OK6",
"K" : "RQD",
"L" : "F5S",
"M" : "OK5",
"N" : "WD5",
"O" : "PKD",
"P" : "PLD",
"Q" : "52D",
"R" : "PL4",
"S" : "DDW",
"T" : "PD2",
"U" : "PL5",
"V" : "PL0",
"W" : "PD5",
"X" : "64D",
"Y" : "OKD",
"Z" : "A54",
" ":"---"
}


let Capyical_Note = Note.toUpperCase() 

let final_note = []
for (let i = 0 ; i < (Note.length) ; i ++){
    let latter_of_note = Capyical_Note[i]
    let d = Spy_note[latter_of_note]
    final_note.push(d)   
}
let c = (final_note.join())
let text_note = (c.replaceAll("," ,""))
console.log(text_note)
document.getElementById("Final01").innerHTML = text_note
document.getElementById("What_copy").innerHTML = `(${text_note})`



}
function closepopup(){
    popup.classList.remove("open-popup")
}