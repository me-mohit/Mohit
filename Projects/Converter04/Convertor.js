document.getElementById("Change_button").onclick = function(){Decote_Language()}


function Decote_Language(){
let name01 = document.getElementById("floatingInput").value




const Spy_note ={ "O2F" :"A" ,
"C3B" :"B" ,
"G54" :"C" ,
"HJK" : "D",
"K5F" : "E",
"PKL" : "F",
"PO5" : "G",
"YUR" : "H",
"KD2" : "I",
"OK6" : "J",
"RQD" : "K",
"F5S" : "L",
"OK5" : "M",
"WD5" : "N",
"PKD" : "O",
"PLD" : "P",
"52D" : "Q",
"PL4" : "R",
"DDW" : "S",
"PD2" : "T",
"PL5" : "U",
"PL0" : "V",
"PD5" : "W",
"64D" : "X",
"OKD" : "Y",
"A54" : "Z",
"---":" "
}

let neme_propert_check = name01.length%3
let i =0;
let final = []
if(neme_propert_check = "0"){
    for(i ;i<= name01.length ; i = i+3){
        let b = i+3
        let c = name01.slice(i , b)
        let d = Spy_note[c]
        final.push(d)
    }
    let c = final.join()
    let final_result = c.replaceAll(",","")
    let lower = final_result
    document.getElementById("Decote").innerHTML = lower
   
}
else{
 document.getElementById("Decote").innerHTML = "Please check the code "
}



}