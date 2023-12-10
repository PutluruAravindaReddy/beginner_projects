var input;
document.querySelector(".botton-select").addEventListener("click",function(){
    input=document.getElementById("email").value;
    var length_of_input=input.length;
var array=[];
var arraycheck=['@','g','m','a','i','l','.','c','o','m'];
for(var i=10;i>=1;i--){
    array.push(input[length_of_input-i]);
}
if(JSON.stringify(arraycheck)===JSON.stringify(array)){
    document.querySelector(".both-boxes").classList.toggle("invis");
    document.querySelector(".both-boxes2").classList.toggle("invis");
    document.querySelector(".footer").classList.toggle("fix-down");
    document.querySelector(".email-stored").innerHTML=input;
}
else{
    document.querySelector(".search-text").classList.toggle("colorfor");
    document.querySelector(".warning").classList.toggle("invis");
}
});
document.querySelector(".dismiss-button").addEventListener("click",function(){
    document.querySelector(".both-boxes").classList.remove("invis");
    document.querySelector(".both-boxes2").classList.add("invis");
    document.querySelector(".footer").classList.toggle("fix-down");
});


