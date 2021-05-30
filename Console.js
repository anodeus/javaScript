var age = prompt("What is your Age ?")
function Yourage(age)
{
  var YearRemaning = 90 - age;
  var Days = YearRemaning * 365;
  var Weeks = YearRemaning * 52;
  var Months = YearRemaning * 12;
  
  alert("You have "+ Days +" days, "+ Weeks +" weeks, and "+ Months +" months left.");
}
              Yourage(age);
              
