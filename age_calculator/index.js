var day = document.getElementById('date-input');
var month = document.getElementById('month-input');
var year = document.getElementById('year-input');
var arrow_press=document.querySelector('.down-arrow');

var stored_date='';
var stored_month='';
var stored_year='';

function thisfeildisrequired(input1){
  document.getElementById(input1+"-label").classList.add("text-red");
  document.getElementById(input1+"-input").classList.add("border-red");
  document.getElementById(input1+"-feild").classList.remove("invis-"+input1);
  document.getElementById(input1+"-must").classList.add("invis-past-"+input1);
  document.getElementById("year-above").classList.add("invis-above-year");
}
function remove_thisfeildisrequired(input2){
  document.getElementById(input2+"-label").classList.remove("text-red");
  document.getElementById(input2+"-input").classList.remove("border-red");
  document.getElementById(input2+"-feild").classList.add("invis-"+input2);
  document.getElementById(input2+"-must").classList.add("invis-past-"+input2);
  document.getElementById("year-above").classList.add("invis-above-year");
}
function mustbeavalid(input3){
  document.getElementById(input3+"-label").classList.add("text-red");
  document.getElementById(input3+"-input").classList.add("border-red");
  document.getElementById(input3+"-feild").classList.add("invis-"+input3);
  document.getElementById(input3+"-must").classList.remove("invis-past-"+input3);
  document.getElementById("year-above").classList.add("invis-above-year");
}

day.addEventListener('input', function() {
  const day_value = day.value;
  stored_date=day_value;
  if (day_value === '') {
    thisfeildisrequired("date");
  }
  else if(day_value>31 || day_value<1){
    mustbeavalid("date");
  }
  else if (stored_month == 1 || stored_month == 3 || stored_month == 5 || stored_month == 7 || stored_month == 8 || stored_month == 10 || stored_month == 12) {
    if (day_value >= 1 && day_value <= 31) {
      remove_thisfeildisrequired("date");
    } 
    else {
      mustbeavalid("date");
    }
  } 
  else if (stored_month == 4 || stored_month == 6 || stored_month == 9 || stored_month == 11) {
    if (day_value >= 1 && day_value <= 30) {
      remove_thisfeildisrequired("date");
    } 
    else {
       mustbeavalid("date");
    }
  }
  else if(stored_month == 2){
    if (day_value >= 1 && day_value <= 28) {
      remove_thisfeildisrequired("date");
    } 
    else {
       mustbeavalid("date");
    }
  }
});
month.addEventListener('input', function() {
  const month_value = month.value;
  stored_month=month_value;
  if (month_value === '') {
    thisfeildisrequired("month");
  }
  else if (month_value>12) {
    mustbeavalid("month");
  }
  else if (month_value >=1 && month_value<=12) {
    remove_thisfeildisrequired("month");
  }
  if (stored_date !== '') {
    day.dispatchEvent(new Event('input'));
  }

});
year.addEventListener('input', function() {
  year_value = year.value;
  stored_year=year_value;
  if (year_value === '') {
    thisfeildisrequired("year");
  }
  else if (year_value>2023) {
    mustbeavalid("year");
  }
  else if(year_value >=1 && year_value<1000){
    remove_thisfeildisrequired("year");
    document.getElementById("year-label").classList.add("text-red");
    document.getElementById("year-input").classList.add("border-red");
    document.getElementById("year-feild").classList.add("invis-year");
    document.getElementById("year-must").classList.add("invis-past-year");
    document.getElementById("year-above").classList.remove("invis-above-year");
  }
  else if (year_value >=1000 && year_value<=2023) {
    remove_thisfeildisrequired("year");
  }
});
function check(){
  if (stored_date == '' || stored_month == '' || stored_year== '') {
    return false;
  }
  else{
    return true;
  }
}
function date_month(){
  if (stored_month == 1 || stored_month == 3 || stored_month == 5 || stored_month == 7 || stored_month == 8 || stored_month == 10 || stored_month == 12) {
    if (stored_date >= 1 && stored_date <= 31) {
      return true;
    } 
    else {
      return false;
    }
  } 
  else if (stored_month == 4 || stored_month == 6 || stored_month == 9 || stored_month == 11) {
    if (stored_date >= 1 && stored_date <= 30) {
      return true;
    } 
    else {
      return false;
    }
  }
  else if(stored_month == 2){
    if (stored_date >= 1 && stored_date <= 28) {
    return true;
    } 
    else {
      return false;
    }
  }
}
function check_year(){
  if (stored_year>2023) {
    return false;
  }
  else if( stored_year<1000){
    return false;
  }
  else{
    return true;
  }
}
var current_date = new Date().getDate();
var current_year = new Date().getFullYear();
var current_month = new Date().getMonth() + 1;
var tell;

function month_checker(month) {
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    tell = 31;
    return tell;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    tell = 30;
    return tell;
  } else if (month == 2) {
    tell = 28;
    return tell;
  }
}

// Example usage:
var daysInCurrentMonth = month_checker(current_month-1);
console.log(daysInCurrentMonth); // Output: 31 (assuming current_month is July)

function check2(m1,m2,d3,d4){
  if(m1<=m2 && d3<=d4){
    document.getElementById("display_year").innerHTML=(current_year - stored_year)+" years";
    document.getElementById("display_month").innerHTML=(parseInt(current_month) - parseInt(stored_month)) +" months";
    document.getElementById("display_date").innerHTML=parseInt(current_date)-parseInt(stored_date)+" days";
  }
  else if(m1<=m2 && d3>=d4){
    document.getElementById("display_year").innerHTML=(current_year - stored_year)+" years";
    document.getElementById("display_month").innerHTML=(parseInt(current_month)-1) - parseInt(stored_month) +" months";
    document.getElementById("display_date").innerHTML=((daysInCurrentMonth - stored_date)+current_date)+" days";
  }
}
function check3(m5,m6,d7,d8){
  if(m5>=m6 && d7<=d8){
    document.getElementById("display_year").innerHTML=((current_year - stored_year)-1)+" years";
    document.getElementById("display_month").innerHTML=((12 - parseInt(stored_month))+parseInt(current_month)) +" months";
    document.getElementById("display_date").innerHTML=parseInt(current_date)-parseInt(stored_date)+" days";
  }
  else if(m5>=m6 && d7>=d8)
  {
    document.getElementById("display_year").innerHTML=((current_year - stored_year)-1)+" years";
    document.getElementById("display_month").innerHTML=(((12 - parseInt(stored_month))+parseInt(current_month))-1) +" months";
    document.getElementById("display_date").innerHTML=((daysInCurrentMonth - stored_date)+current_date)+" days";
  }
}
arrow_press.addEventListener('click',function(){
if(check() == true && date_month() == true && check_year()== true )
  {
    document.querySelector(".down-box").classList.remove("invi");
    document.querySelector(".outer-box").classList.add("for-display");
    document.querySelector(".footer").classList.add("footer-margin");
    document.getElementById("ok_show").addEventListener("click",function(){
      document.querySelector(".down-box").classList.add("invi");
      document.querySelector(".outer-box").classList.remove("for-display");
      document.querySelector(".footer").classList.remove("footer-margin");
    })
    check2(stored_month,current_month,stored_date,current_date);
    check3(stored_month,current_month,stored_date,current_date);
    if(stored_month==current_month &&stored_date<=current_date){
      document.getElementById("display_year").innerHTML=(current_year - stored_year)+" years";
      document.getElementById("display_month").innerHTML= "00 months";
      document.getElementById("display_date").innerHTML=parseInt(current_date)-parseInt(stored_date)+" days";
    }
    else if(stored_month==current_month &&stored_date>=current_date){
      document.getElementById("display_year").innerHTML=((current_year - stored_year)-1)+" years";
      document.getElementById("display_month").innerHTML= "11 months";
      document.getElementById("display_date").innerHTML=((daysInCurrentMonth - stored_date)+current_date)+" days";
    }
    // var show_year=document.getElementById("display_year").innerHTML;
    // var show_month=document.getElementById("display_month").innerHTML;
    // var show_date=document.getElementById("display_date").innerHTML;
    // document.querySelector(".outer-box").classList.add("invi");
    // document.getElementById("show-down").classList.remove("invi");
    // document.getElementById("display_year_show").innerHTML=show_year+"";
    // document.getElementById("display_month_show").innerHTML= show_month+"";
    // document.getElementById("display_date_show").innerHTML= show_date+"";
  }
});
