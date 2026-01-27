




var date = new Date();
var now = new Date();

date.setDate(prompt("ENTER YOUR BIRTH DATE"));
date.setMonth(prompt("ENTER YOUR BIRTH MONTH"));
date.setFullYear(prompt("ENTER YOUR BIRTH YEAR"));

console.log("Current Date and Time: " + date.toString());


console.log(date.getTime())
console.log(now.getTime());

var diff = now.getTime() - date.getTime();

console.log("Difference in milliseconds: " + diff);