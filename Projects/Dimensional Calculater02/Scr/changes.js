
document.getElementById("whtselect").oninput=function(){onintput()}

   
function onintput(){
    let para1 = '<div id="dimname1">...... </div> <input id="firstvalue" type="Number" class="form-control Input_01 ">';
    let changes = document.getElementById("changes");
    let para2 = '<div id="dimname2">...... </div> <input id="secondvalue" type="Number" class="form-control Input_01">';
    let whtdo = document.getElementById("whtselect").value;
    let whereiput = document.getElementById("whtselect");
    let intput = `<div class="off">...Area of... </div> <input id="Selectwhatudo" list="areaselacter" class="areselecter form-control Input_01">`;       
    let Valuelist = `<div class="off">...Volume of... </div> <input id="Selectwhatudo" list="Valueof" class="areselecter form-control Input_01 ">`;       
    let _Energy = '<div class="off">...Type of Energy... </div> <input id="Selectwhatudo" list="emergy" class="areselecter form-control Input_01" >'; 
    let AI_Effect =`<div  id="Ai_effect_01" class="Ai_001">
    Wait I Check Because humans I fool 
    He Not do work properly .
    <div id="A_I"></div>
  </div>` 
  let A_I = `<img src="img/Ai-unscreen (1).gif" alt="Computer man" style="width:40px;height:40px;" id="A_i" ></img>`
   if (whtdo!=""){
    document.getElementById("whtselect").disabled = true;
   }    
   if(whtdo=="Area"){
       try{ 
        setTimeout(()=>{document.getElementById("A_I").insertAdjacentHTML("afterbegin" , A_I)},10)
        whereiput.insertAdjacentHTML("afterend" , AI_Effect)
        setTimeout(()=>{document.getElementById("Ai_effect_01").innerHTML="Done Say Thanku"},2000)
        setTimeout(()=>{document.getElementById("Ai_effect_01").remove()},3000)
       
        setTimeout(()=>{whereiput.insertAdjacentHTML("afterend", intput)},4000)
       setTimeout(()=>{ document.getElementById("Selectwhatudo").oninput=function(){areaoff()}},4000)
       
       }
       catch(err){
        document.getElementById("A_I").innerHTML = err.message;
    }
}
    else if(whtdo=="Volume"){
        try{whereiput.insertAdjacentHTML("afterend", Valuelist)
        document.getElementById("Selectwhatudo").oninput=function(){volumeof()}}
        catch(err){
            console.log(new Error())
        }
    }
    else if(whtdo=="Force"){
        try{changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML="..Mass.."
        document.getElementById("dimname2").innerHTML="..Acceleration.."}
        catch(err){
            console.log (new console.error())}
        }
    else if(whtdo=="Momentum"){
        try{changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML="..Mass.."
        document.getElementById("dimname2").innerHTML="..Velocity.."}
        catch(err){
            console.log(new console.error())}
        }
    else if(whtdo=="Impules"){
        try{changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML="..Elapsed time.."
        document.getElementById("dimname2").innerHTML="..Applied force.."}
        catch(error){new error()}}
    else if(whtdo=="Work"){
        try{changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML=".. Force.."
        document.getElementById("dimname2").innerHTML=".. Displacement.."}
        catch(err){
            console.log(new console.error())}
        }
    else if(whtdo=="Density"){
        try{changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML=".. Mass.."
        document.getElementById("dimname2").innerHTML=".. Velocity.."}
        catch(err){
            console.log(new console.error())
        }}
    else if(whtdo=="Velocity"){
        try{changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML=".. Displacement.."
        document.getElementById("dimname2").innerHTML=".. Time.."}
        catch(err){
            console.log(new console.error())}
        }
    else if(whtdo=="Speed"){
        try{changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML=".. Distance.."
        document.getElementById("dimname2").innerHTML=".. Time.."}
        catch(error){
            console.log(error)
        }}
    else if(whtdo=="Energy"){
        try{whereiput.insertAdjacentHTML("afterend" , _Energy)
        document.getElementById("Selectwhatudo").oninput=()=>{energy()}

    }
catch(err){
    console.error()
}}}
    
    
    

function areaoff(){
    let areaofg = document.getElementById("Selectwhatudo").value;
    let para1 = '<div id="dimname1">...... </div> <input id="firstvalue" type="Number" class="form-control Input_01 ">';
    let changes = document.getElementById("changes");
    let para2 = '<div id="dimname2">...... </div> <input id="secondvalue" type="Number" class="form-control Input_01">';
    if(areaoff!=""){
        try{document.getElementById("Selectwhatudo").disabled = true;
        document.getElementById("secondvalue").disabled = true;}
        catch(err){
            console.log("h")
        }
    }
    if(areaofg=="Square"){
        changes.insertAdjacentHTML("afterend",para1)
        document.getElementById("dimname1").innerHTML="..Side(a).."
    }
    else if(areaofg=="Rectangle"){
        changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML="..Length.."
        document.getElementById("dimname2").innerHTML="..Breath.."}
    else if(areaofg=="Triangle"){
        changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML="..Base.."
        document.getElementById("dimname2").innerHTML="..Height.."}

    else if(areaofg=="Circle"){
        changes.insertAdjacentHTML("afterend",para1);
        document.getElementById("dimname1").innerHTML="..Radius.."}
    else()=>{
        areaofg = undefined    
    }}
function volumeof(){
    let volumeof = document.getElementById("Selectwhatudo").value;
    let para1 = '<div id="dimname1">...... </div> <input id="firstvalue" type="Number" class="form-control Input_01">';
    let changes = document.getElementById("changes");
    let para2 = '<div id="dimname2">...... </div> <input id="secondvalue" type="Number" class="form-control Input_01">';
    let para3 = '<div id="dimname3">...... </div> <input id="Thirdvalue" type="Number" class="form-control Input_01 ">';
    if(volumeof=="Cube"){
        changes.insertAdjacentHTML("afterend",para1)
        document.getElementById("dimname1").innerHTML="..Side(a).."}
    else if(volumeof=="cuboid"){
        changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        changes.insertAdjacentHTML("afterend",para3)
        document.getElementById("dimname1").innerHTML="..Height.."
        document.getElementById("dimname2").innerHTML="..Length.."
        document.getElementById("dimname3").innerHTML="..Breath..";}
    else if(volumeof=="Sphare"){
        changes.insertAdjacentHTML("afterend",para1)
        document.getElementById("dimname1").innerHTML="..Radius.."}
        
    else if(volumeof=="hemisphere"){
        changes.insertAdjacentHTML("afterend",para1)
        document.getElementById("dimname1").innerHTML="..Radius.."}
    else if(volumeof=="cylinder"){
        changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML="..Radius.."
        document.getElementById("dimname2").innerHTML="..Height.."}
    else if(volumeof=="cone"){
        changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML="..Radius.."
        document.getElementById("dimname2").innerHTML="..Height.."
        

    }
}
function energy(){
    let Energyof = document.getElementById("Selectwhatudo").value;
    let para1 = '<div id="dimname1">...... </div> <input id="firstvalue" type="Number" class=" form-control Input_01">';
    let changes = document.getElementById("changes");
    let para2 = '<div id="dimname2">...... </div> <input id="secondvalue" type="Number" class=" form-control Input_01">';
    let para3 = '<div id="dimname3">...... </div> <input id="Thirdvalue" type="Number" class=" form-control Input_01">';
    if(Energyof=='Potential energy'){
        changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        changes.insertAdjacentHTML("afterend",para3)
        document.getElementById("dimname1").innerHTML="..Mass.."
        document.getElementById("dimname2").innerHTML="..Gravitation.."
        document.getElementById("dimname3").innerHTML="..Height.."

    }
    
    else if(Energyof=='Kinetic energy'){
        changes.insertAdjacentHTML("afterend",para1)
        changes.insertAdjacentHTML("afterend",para2)
        document.getElementById("dimname1").innerHTML="..Mass.."
        document.getElementById("dimname2").innerHTML="..Velocity.."
       

    }}
    
