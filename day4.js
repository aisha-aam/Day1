// Task 1
var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red",
    price: 500000
};
console.log(car);

// Task 2
console.log(car.brand);
console.log(car["year"]);

// Task 3
car.color = "black";
car.value = 500000;
console.log(car);

// Task 4
delete car.year;
console.log(car.year);
// undefined because year was deleted from the object

// Task 5
var student = {
    "student-name": "Ahmed"
};
console.log(student["student-name"]);

// Task 6
var book = {
    title: "JavaScript Basics",
    author: {
        firstName: "Sara",
        lastName: "Ahmed"
    },
    age: 20
};
console.log(book.author.lastName);

// Task 7
var person = {
    name: "Ali",
    age: 25,
    city: "Cairo"
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("name"));

// Task 8
var settings = {
    theme: "dark"
};
settings.theme = "light";
console.log(settings);

settings.theme = "dark";
console.log(settings);

// Task 9
var cities = ["Cairo", "Giza", "Alex", "Aswan", "Luxor"];
console.log(cities);
console.log(cities.length);

// Task 10
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[cities.length - 1]);

// Task 11
cities.push("Port Said");
console.log(cities);

cities.unshift("Suez");
console.log(cities);

// Task 12
cities.pop();
console.log(cities);

cities.shift();
console.log(cities);

// Task 13
var languages = ["HTML", "CSS", "JS", "React"];
console.log(languages.indexOf("Python"));
console.log(languages.includes("JS"));

var settings2 = {
    fontSize: 16
};
Object.freeze(settings2);
settings2.fontSize = 20;
console.log(settings2);

languages.unshift("Python");
console.log(languages);

languages.shift();
console.log(languages);

languages.splice(2, 1);
console.log(languages);

// Task 14
var items = ["HTML", "CSS", "JS", "React"];

for (var i = 0; i < items.length; i++) {
    console.log(i, items[i]);
}

// Task 15
var things = ["pen", "book", "bag"];

things.forEach(function(item) {
    console.log(item);
});

var colors = ["red", "green", "blue", "yellow"];

for (var color of colors) {
    if (color === "blue") {
        break;
    }
    console.log(color);
}

// Task 16
var letters = ["A", "B", "C"];
letters.push("D");

console.log(letters);
console.log(letters.length);

// Task 17
var fruits = ["apple", "banana", "cherry"];

fruits.push("E");
fruits.shift();

var upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});

console.log(upperCaseFruits);
console.log(fruits);

// Task 18
var numbers = [20, 60, 40, 80, 30, 100];

var greaterThan50 = numbers.filter(function(number) {
    return number > 50;
});

console.log(greaterThan50);

// Task 19
var cities2 = ["Cairo", "Giza", "Alex", "Aswan"];

var foundCity = cities2.find(function(city) {
    return city.startsWith("A");
});

var foundIndex = cities2.findIndex(function(city) {
    return city.startsWith("A");
});

console.log(foundCity);
console.log(foundIndex);

// Task 20
var numbers2 = [10, 55, 30, 80, 45, 90];

var firstGreaterThan50 = numbers2.find(function(number) {
    return number > 50;
});

console.log(firstGreaterThan50);

var letters2 = ["a", "b", "c", "d", "e"];

var copy = letters2.slice(1, 4);

console.log(copy);
console.log(letters2);

// Task 21
var words = ["one", "two", "three", "four", "five"];

var removed = words.splice(1, 2);

console.log(removed);
console.log(words);

// Task 22
var numbers3 = [40, 100, 1, 5, 25];

numbers3.sort(function(a, b) {
    return a - b;
});

console.log(numbers3);

// Task 23
var ages = [16, 21, 17, 19];

var someResult = ages.some(function(age) {
    return age >= 18;
});

var everyResult = ages.every(function(age) {
    return age >= 18;
});

console.log(someResult);
console.log(everyResult);

// Task 24
var nums = [5, 10, 15, 20];

var total = nums.reduce(function(acc, number) {
    return acc + number;
}, 0);

console.log(total);

// Task 25
var students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (var student of students) {
    console.log(student.name, student.grade);
}

// Task 26
var passedStudents = students.filter(function(student) {
    return student.grade >= 80;
});

var studentNames = passedStudents.map(function(student) {
    return student.name;
});

console.log(studentNames);

// Task 27
var products = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 50 },
    { name: "Bag", price: 25 }
];

var totalPrice = products.reduce(function(acc, product) {
    return acc + product.price;
}, 0);

console.log(totalPrice);

// Task 28
var languages2 = ["js", "html", "css", "js", "react", "js"];

var jsCount = 0;

for (var language of languages2) {
    if (language === "js") {
        jsCount++;
    }
}

console.log(jsCount);

// Task 29
var classroom = {
    teacher: "Ahmed",
    students: ["Omar", "Mona", "Ali", "Sara"]
};

console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

// Task 30
var products2 = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];

var titles = products2.map(function(product) {
    return product.title.toUpperCase();
});

var cheapProducts = products2.filter(function(product) {
    return product.price < 30;
});

var allPrices = products2.reduce(function(acc, product) {
    return acc + product.price;
}, 0);

console.log(titles);
console.log(cheapProducts);
console.log(allPrices);