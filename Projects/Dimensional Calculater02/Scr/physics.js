document.getElementById("btn_01").onclick=function(){answreofgivendata()}

function square(a){return a*a};
function multi(a,b){return a*b}
function divide(a,b){return a/b}
function triangle(a,b){return (a*b)/2};
function Circle(a){return (22*a)/7};
function volumecube(a){return a*a*a};
function volumecuboid(a,b,c){return a*b*c}
function valoumeofsphare(a){ let b = Math.pow(a,3);return (4*3.14*b)/3}
function valoumeofcylinder(a,b){let c = Math.pow(a,2); return(22*c*b)/7}

function answreofgivendata(){
    console.log("I am Inside of Area")
    let whtdo = document.getElementById("whtselect").value;
    let _answer = document.getElementById("Answer");
    let _whatisanswer ;
    
    if(whtdo=="Area"){
        _whatisanswer =document.getElementById("Selectwhatudo").value

        if(_whatisanswer== "Square"){
                _answer.innerHTML="Area Of "+ _whatisanswer +" is " + square(Number.parseFloat(document.getElementById("firstvalue").value))
            }
        else if(_whatisanswer=="Rectangle"){
                _answer.innerHTML="Area Of "+ _whatisanswer +" is " + multi(Number.parseFloat(document.getElementById("firstvalue").value,Number.parseFloat(document.getElementById("secondvalue").value)))

            }
        else if(_whatisanswer=="Triangle"){
                _answer.innerHTML = "Area of " + _whatisanswer +" is "+ triangle(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value))
            }
        else if(_whatisanswer== "Circle"){
                
                _answer.innerHTML = " Area of " + _whatisanswer +" is "+ Circle(Number.parseFloat(document.getElementById("firstvalue").value))+" Approx "
            }
        }
    else if(whtdo=="Volume"){
        _whatisanswer =document.getElementById("Selectwhatudo").value
        if(_whatisanswer =="Cube")
            _answer.innerHTML="Volume of " + _whatisanswer +" is "+ volumecube(Number.parseFloat(document.getElementById("firstvalue").value)) 
        else if(_whatisanswer =="cuboid")
            _answer.innerHTML="Volume of " + _whatisanswer +" is "+ volumecuboid(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value),Number.parseFloat(document.getElementById("Thirdvalue").value)) 
        else if(_whatisanswer =="Sphare")
            _answer.innerHTML="Volume of " + _whatisanswer +" is "+ valoumeofsphare(Number.parseFloat(document.getElementById("firstvalue").value)) +" Approx "
        else if(_whatisanswer=="hemisphere")
            _answer.innerHTML="Volume of " + _whatisanswer +" is "+ (valoumeofsphare(Number.parseFloat(document.getElementById("firstvalue").value)))/2 +" Approx "
        else if(_whatisanswer=="cylinder")
           setTimeout( ()=>{_answer.innerHTML="Volume of " + _whatisanswer +" is "+ (valoumeofcylinder(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value),)) +" Approx "},200)
        else if(_whatisanswer=="cone")
           setTimeout( ()=>{_answer.innerHTML="Volume of " + _whatisanswer +" is "+ (valoumeofcylinder(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value),))/3 +" Approx "},200)}
    else if(whtdo=="Energy"){
        _whatisanswer =document.getElementById("Selectwhatudo").value   
        if(_whatisanswer == "Potential energy"){
            
            _answer.innerHTML= _whatisanswer +" is "+ volumecuboid(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value),Number.parseFloat(document.getElementById("Thirdvalue").value))+" Joules(J)"
        }
        else if(_whatisanswer == "Kinetic energy"){
            _answer.innerHTML= _whatisanswer +" is " + multi(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value))+" Joules(J)"
        }
    }
    if(whtdo=="Force"){
        _answer.innerHTML=  whtdo + " is " +  multi(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value)) + " Newtone "
    }
    if(whtdo=="Momentum"){
        _answer.innerHTML=  whtdo + " is " +  multi(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value)) + " Kg.m/s "
    }
    if(whtdo=="Impules"){
        _answer.innerHTML=  whtdo + " is " +  multi(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value)) + " Kg.m/s "
    }
    if(whtdo=="Work"){
        _answer.innerHTML=  whtdo + " is " +  multi(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value)) + " Kg.meter square/second square "
    }
    if(whtdo=="Density"){
        _answer.innerHTML=  whtdo + " is " +  divide(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value)) + " Kilogram per cubic meter "
    }
    if(whtdo=="Velocity"){
        _answer.innerHTML=  whtdo + " is " +  divide(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value)) + " m/s "
    }
    if(whtdo=="Speed"){
        _answer.innerHTML=  whtdo + " is " +  divide(Number.parseFloat(document.getElementById("firstvalue").value),Number.parseFloat(document.getElementById("secondvalue").value)) + "m/s  "
    }

    }
