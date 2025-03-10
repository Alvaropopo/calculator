var currentvalue="";
var displayscreen=document.getElementById("display");

const boxelement=document.querySelector("#whole");
function display(num){
    displayscreen.style.background="#d3d3d3";
    boxelement.style.background="#32dd7d";
    boxelement.style.transform="scale(1)";
    currentvalue+=num;
    displayscreen.innerHTML=currentvalue;
}

function clearscreen(){
    displayscreen.style.background="#d3d3d3";
    boxelement.style.background="#32dd7d";
    boxelement.style.transform="scale(1)";
    currentvalue="";
    displayscreen.innerHTML=currentvalue;
}

function equals(){
    try{
        displayscreen.style.background="#d3d3d3";
        boxelement.style.transform="scale(1.2)";
        currentvalue=eval(currentvalue);
        displayscreen.innerHTML=currentvalue;
    }catch{
        displayscreen.innerHTML="error";
        boxelement.style.background="#ff2e2e";
        displayscreen.style.background="#ff2e2e";
    }
}