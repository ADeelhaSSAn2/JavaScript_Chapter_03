// Question#1
var age ="21"
alert("I am " + age + " year old");

// Question#2
// function getVisitorCount() {
//     if (localStorage.getItem('visitorCount')) {
//         let count = parseInt(localStorage.getItem('visitorCount')) + 1;
//         localStorage.setItem('visitorCount', count);
//         return count;

//     } else {
//         localStorage.setItem('visitorCount', 1);
//         return 1;
//     }

// }

// Question #3
var birthYear ="2002"
alert("My birth year is " + birthYear + "\n Data type of my declared  variable is number")
document.write("My birth year is " + birthYear + "</br>" + " Data type of my declared  variable is number")

// Question #4
var visitorName = prompt("enter your name" ,"Adeel ");
var productTitle = prompt("product title name ", " 5 T-shirt(s) ");
var quantity = prompt("How many " + productTitle + " would you like to order?");

var mess = "</br>"+ visitorName + " ordered " + productTitle + " on XYZ cloting store";
document.write(mess)


