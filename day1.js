console.log("JS is running successfully");

window.alert("Ready to practice!");

var productName = "Laptop" ;
var price = 15000 ;
var isAvailable = true;

console.log(productName, typeof productName);
console.log(price, typeof price);
console.log(isAvailable, typeof isAvailable);

document.getElementById("mainTitle").innerText="practice time "; 

var city = "Cairo";
var country = "Egypt";
console.log(city+ "," +country);
console.log(`Location: ${city} - ${country}`);

var itemPrice = 120;
var quantity = 3;
var total = itemPrice * quantity;
var diff = total - 400;
var mul = itemPrice * quantity;
var div = total / quantity;
var remainder = total % quantity;
var power = quantity ** 2;
console.log(total, diff, mul, div, remainder, power);

color = window.prompt("whats ur fav color:")
console.log("Your favorite color is:" , color);

score = 20;
textScore = "20";
console.log(score == textScore);//comparison of value 
console.log(score === textScore);//comparing of data type and value 

quantityInput = window.prompt(" quantity:");
num1 = Number(quantityInput);
console.log(num1, typeof num1);
num2 = parseInt(quantityInput);
console.log(num2, typeof num2);
num3 = +quantityInput;
console.log(num3, typeof num3);

fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1] = "orange";
fruits.push("grape");
console.log(fruits);

course = {
    title: "JavaScript",hours: 20, level: "Beginner"
};
course.title = "Dart";
console.log(course.hours);
console.log(course);

hasAccount = true;
isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);

var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance);

var hotel = prompt(" hotel name:");
var nights = prompt(" number of nights:");
var confirmed = confirm(" confirmed?");
var bookingMessage = `Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmed}`;
console.log(bookingMessage);
alert(bookingMessage);

console.log(2 + 8 + "0"); //100
console.log("2" + 8 + 0); //280
console.log(2 + "8" + 0);  //280

var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2);
//city2 has a copy of city1, so changing city2 doesn't change city1

var car1 = {
    brand: "Toyota"
};
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2);
//car2 points to the same object as car1 so changing car2 also changes car1

var car1 = {
    brand: "Toyota"
};

var car2 = Object.assign({}, car1);
car2.brand = "Honda";
console.log(car1);
console.log(car2);

let mixedBag = ["Hello",25,true,null,undefined,{ name: "Aisha" },["apple", "banana"]];
console.log(typeof mixedBag[0],typeof mixedBag[1],typeof mixedBag[2],typeof mixedBag[3],typeof mixedBag[4],typeof mixedBag[5],typeof mixedBag[6]);


customerName=prompt("customer name:");
price=Number(prompt("order price:"));
message=`Customer: ${customerName} - Price: ${price}`;
console.log(message);
alert(message);
document.getElementById("result").innerText=message;


num1=Number(prompt("Enter first number:"));
num2=Number(prompt("Enter second number:"));
sum=num1+num2;
diff=num1-num2;
prod=num1*num2;
div=num1/num2;
mod=num1%num2;
pow=num1**num2;
console.log("Sum:",sum,"Difference:",diff,"Product:",prod,"Division:",div,"Modulus:",mod,"Power:",pow);

var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + c + d + e);//906030 when we combine num with string it returns string 
//result 
console.log(a + b + parseInt(c) + d + e);