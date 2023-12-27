let time=document.getElementById("time");
var button_len=document.querySelectorAll("#button").length;
var input=document.querySelector(".user_input");

var today=new Date();
var hours=today.getHours();
var minutes=today.getMinutes();
var current_time=hours+":"+minutes;
time.innerHTML=current_time;


document.querySelector(".calculator-img").addEventListener("click",function(){
    document.querySelector(".outer-div").classList.add("invis");
    document.querySelector(".home-apps").classList.add("invis");
    document.querySelector(".container").classList.remove("invis");
});
document.querySelector(".control-but-inside").addEventListener("click",function(){
    console.log("hello");
    document.querySelector(".outer-div").classList.remove("invis");
    document.querySelector(".home-apps").classList.remove("invis");
    document.querySelector(".container").classList.add("invis");
});


for(var i=0;i<button_len;i++){
    document.querySelectorAll("#button")[i].addEventListener("click",function(){
        var pressed=this.innerHTML;
        if(input.value[0]=="/"||input.value[0]=="*"||input.value[0]=="%"){
            document.querySelector(".valid_number").classList.remove("invis");
        }
        else if(input.value[0]!="/"||input.value[0]!="*"||input.value[0]=="%"){
        document.querySelector(".valid_number").classList.add("invis");
        }
        switch(pressed){
            case "AC":
                input.value="";
                break;
            case "⌫":
                input.value=input.value.toString().slice(0,-1);
                break;
            case "=":
                input.value=eval(input.value);
                break;
            case "x":
                input.value=input.value+"*";
                break;           
            default:
                input.value=input.value+pressed;
                break;
        }
});
}

document.addEventListener("keypress",function(event){
    console.log(event.key);
    switch(event.key){
        case "0":  
        case "1": 
        case "2":   
        case "3":    
        case "4":  
        case "5":  
        case "6":  
        case "7":  
        case "8":  
        case "9": 
        case "%":  
        case "+":  
        case "-": 
        case "*": 
        case "/":  input.value=input.value+event.key;  break;
        case "=":  input.value=eval(input.value);  break;
        case "Enter":  input.value=eval(input.value);  break;
    }
});