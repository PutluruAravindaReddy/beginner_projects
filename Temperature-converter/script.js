let TitleEle=document.querySelector(".dynamic-island");
let TempEle=document.querySelector(".dynamic-island-invis");
let tempdivEle=document.querySelector(".temperature-box");
let fromSelected=document.querySelector(".from-select");
let toSelected=document.querySelector(".to-select");
let submitbtn=document.querySelector(".submit-btn");
let frominput=document.getElementById("from-input");
let toinput=document.getElementById("to-input");
let toOptions=document.querySelector(".to-options");

TitleEle.addEventListener("click",function(){
TempEle.classList.remove("invis");
TitleEle.classList.add("invis");
tempdivEle.classList.remove("invis");
});
TempEle.addEventListener("click",function(){
    TempEle.classList.add("invis");
    TitleEle.classList.remove("invis");
    tempdivEle.classList.add("invis");
});
submitbtn.addEventListener("click",function(){
    let FSV=fromSelected.value;
    let TSV=toSelected.value;
    let UV=frominput.value;
    // let TV=toinput.value;

    if(FSV==TSV){
        toinput.value=UV;
    }
    else if(FSV=="c" && TSV=="f"){
        toinput.value=(9/5*UV)+32;    
    }
    else if(FSV=="c" && TSV=="k"){
        toinput.value=parseFloat(UV)+273.15;    
    }
    else if(FSV=="f" && TSV=="c"){
        toinput.value=(UV-32)*5/9;    
    }
    else if(FSV=="f" && TSV=="k"){
        toinput.value=parseFloat(5*(UV-32)/9)+273.15;    
    }
    else if(FSV=="k" && TSV=="c"){
        toinput.value=parseFloat(UV)-273.15;     
    }
    else if(FSV=="k" && TSV=="f"){
        toinput.value=1.8*(parseFloat(UV)-273.15)+32;    
    }
});
toSelected.addEventListener("click",function(){
    if(toinput.value="1245"){
    toinput.value=" ";
    }
});