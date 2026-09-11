//task 1 
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//task2
for (var i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//task3
var total = 0;
for (var i = 1; i <= 15; i++) {
    total += i;
}
console.log("Total sales =", total);

var ticket = 1;

//task4
while (ticket <= 7) {
    console.log(ticket);
    ticket++;
}
 
//task5
var countdown = 8;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}

//task6
var i = 1;
do {
    console.log(i);
    i++;
} 
while (i <= 5);

//task7
var itemsInCart = 10;
while (itemsInCart < 5) {
    console.log("Start shopping");
}


var itemsInCart = 10;
do {
    console.log("Start shopping");
} 
while (itemsInCart < 5);

//task8
var userName = "Aisha";
var userAge = 21;
var isStudent = true;
var dbPrice = 20;
var inputPrice = "20";
console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(isStudent, typeof isStudent);
console.log(dbPrice, typeof dbPrice);
console.log(inputPrice, typeof inputPrice);

//task9
var dbPrice = 10;
var inputPrice = "10";
console.log(dbPrice == inputPrice);//compares values only and may convert the type
console.log(dbPrice === inputPrice);//ompares values and data types

//task10
var userName = prompt("Whats ur name?");
console.log(userName);
alert(`Welcome, ${userName}`);

//task11
var value = prompt("Enter quantity:");
var a = Number(value);
var b = parseInt(value);
var c = +value;
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

//task12
var a = 10;
var b = 3;
console.log("Add =", a + b);
console.log("Sub =", a - b);
console.log("Mul =", a * b);
console.log("Div =", a / b);
console.log("Mod =", a % b);
console.log("Pow =", a ** b);

//task13
var age = prompt("Enter ur age:");
age = Number(age);
if (age >= 18) {
    console.log("You can enter");
} else {
    console.log("Sorry, underage");
}

//task14
var grade = 85;
if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//task15
var age = prompt("Enter your age:");
age = Number(age);
var result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//task16
var day = prompt("Enter day:");
switch (day) {
    case "Monday":
        console.log("Workday");
        break;
    case "Friday":
        console.log("Workday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}

//task17
var price = prompt("Enter unit price:");
price = Number(price);
for (var i = 1; i <= 10; i++) {
    console.log(i + " x " + price + " = " + (i * price));
}

//task18
var size = prompt("Enter file size:");
size = Number(size);
if (size > 0) {
    for (var i = 1; i <= size; i++) {
        console.log(i);
    }
} else {
    console.log("Invalid file size");
}

//task19
var start = prompt("Enter start:");
var end = prompt("Enter end:");
start = Number(start);
end = Number(end);
for (var i = start; i <= end; i++) {
    if (i % 2 == 0) {
        console.log(i, "express");
    } else {
        console.log(i, "normal");
    }
}

//task20
var students = ["Aisha", "Ash"];
for (var i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}

//task21
var total = 0;
for (var i = 1; i <= 5; i++) {
    var expense = prompt(`Enter expense for day ${i}:`);
    expense = Number(expense);

    total += expense;
}
var average = total / 5;
console.log("Total =", total);
console.log("Average =", average);

//task22
var correctPin = "1234";
var attempts = 0;
while (attempts < 3) {
    var pin = prompt("Enter PIN:");
    if (pin === correctPin) {
        console.log("Login successful");
        break;
    }
    attempts++;
}
if (attempts === 3) {
    console.log("Login failed");
}

//task23
var hasAccount = true;
var isVerified = false;
if (hasAccount && isVerified) {
    console.log("Welcome back");
} else if (hasAccount && !isVerified) {
    console.log("Please verify your account");
} else {
    console.log("Please sign up");
}


//task24
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
c = Number(c);
var total = a + b + c + d + e;
console.log("Total =", total);
if (total >= 20) {
    for (var i = 1; i <= total; i++) {
        console.log(i);
    }
} else {
    console.log("Too small ");
}

//task25
var n = prompt("Enter a number:");
n = Number(n);
if (n < 0) {
    alert("Invalid number");
} else {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`${n}! = ${factorial}`);
    alert(`${n}! = ${factorial}`);
}