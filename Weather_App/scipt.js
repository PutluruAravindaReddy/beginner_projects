
let inputEle=document.getElementById("location-input");
let tempEle=document.getElementById("temp-value");
let locEle=document.getElementById("location");
let weatherdescEle=document.getElementById("weather-desc");
let btnEle=document.getElementById("btn");
let unit_c=document.querySelector(".c");
let unit_f=document.querySelector(".f");

const apiKey='5a87f1a95650c8c2394dc37fc084992d';

btnEle.onclick=function(){
    if(inputEle.value==""){
        alert("Please Enter some location");
    }
    else{
       let loc=inputEle.value
       let  url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res => res.json())
        .then(data =>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            tempEle.innerText=Math.ceil(feels_like-273);
            locEle.innerText=name;
            weatherdescEle.innerText=description
            unit_f.onclick=function(){
                unit_c.classList.add("unit-c");
                unit_f.classList.remove("unit-f");
                tempEle.innerText=Math.ceil((feels_like-273)*(9/5)+32);
               
            }
            unit_c.onclick=function(){
                unit_f.classList.add("unit-f");
                unit_c.classList.remove("unit-c");
                tempEle.innerText=Math.ceil(feels_like-273);
            }
        })
        .catch(()=>{
            alert("Enter valid location");
        })
        inputEle.value=""
    }
}

// unit_f.onclick=function(){
//     unit_c.classList.add("unit-c");
//     unit_f.classList.remove("unit-f");
//     // tempEle.innerText=Math.ceil((tempEle.value));
   
// }