//Task 1
function withoutStrict(){
    aishaMessage="I am Ash";
}
withoutStrict();
console.log(aishaMessage);

//Task 2
function withStrict(){
    "use strict";
    try{
        message="test!";
    }catch(error){
        console.log(error.message);
    }
}
withStrict();

//Task 3
function deleteExample(){
    "use strict";
    var localVar="test";
    try{
        //delete localVar;
    }catch(error){
        console.log(error.message);
    }
    var aishaObject={name:"Aisha"};
    delete aishaObject.name;
    console.log(aishaObject);
}
deleteExample();
//Task 4
console.log(x);
var x=10;
console.log(x);

//Task 5
sayHi();
function sayHi(){
    console.log("Hi");
}
try{
    sayBye();
}catch(error){
    console.log(error.message);
}
var sayBye=function(){
    console.log("Bye");
};

//Task 6
try{
    console.log(a);
}catch(error){
    console.log(error.message);
}
let a=5;

//Task 7
var n=1;
function demo(){
    console.log(n);
    var n=2;
    console.log(n);
}
demo();
console.log(n);

//Task 8
function varScopeExample(){
    if(true){
        var aishaName="Aisha";
    }
    console.log(aishaName);
}
varScopeExample();

//Task 9
function blockScopeExample(){
    if(true){
        let aishaName="Aisha";
        const aishaAge=21;
        console.log(aishaName);
        console.log(aishaAge);
    }
}
blockScopeExample();

//Task 10
var aishaCity="Giza";
var aishaCity="Cairo";
console.log(aishaCity);
let aishaAge=21;
//let aishaAge=22;

//Task 11
const student={
    name:"Aisha",
    age:21,
    city:"Giza"
};
console.log(student);
student.age=22;
console.log(student);
student.grade="A";
console.log(student);
delete student.city;
console.log(student);
try{
    student={
        name:"Aisha"
    };
}catch(error){
    console.log(error.message);
}

//Task 12
const nums=[1,2,3];
nums.push(4);
console.log(nums);
nums[0]=100;
console.log(nums);
try{
    nums=[5,6,7];
}catch(error){
    console.log(error.message);
}

//Task 13
var aishaVar;
console.log(aishaVar);
let aishaLet;
console.log(aishaLet);

//Task 14
var g1="Aisha var global";
let g2="Aisha let global";
const g3="Aisha const global";
console.log(window.g1);
console.log(window.g2);
console.log(window.g3);


//Task 15
const handlers={};
for(let i=0;i<3;i++){
    handlers["fn"+i]=function(){
        return "index: "+i;
    };
}
console.log(handlers.fn0());
console.log(handlers.fn2());


//Task 16
const welcome=(name)=>`Welcome, ${name}!`;
console.log(welcome("Aisha"));

//Task 17
const fullInfo=(first,last,age)=>`${first} ${last} is ${age} years old`;
console.log(fullInfo("Aisha","Amer",21));

//Task 18
const multiply=(a,b)=>a*b;
console.log(multiply(5,4));
const addNumbers=(a,b)=>{
    console.log(a);
    console.log(b);
    return a+b;
};
console.log(addNumbers(5,4));

//Task 19
const product={
    title:"Laptop",
    price:15000,
    inStock:true,
    brand:"Dell"
};
const{title,price,inStock}=product;
console.log(title);
console.log(price);
console.log(inStock);

//Task 20
const technologies=["HTML","CSS","JS","React"];
const[first,second]=technologies;
console.log(first);
console.log(second);

//Task 21
function greet(name="Aisha",message="Hello"){
    return `${message}, ${name}!`;
}
console.log(greet("Mona","Hi"));
console.log(greet("Aisha"));
console.log(greet());

//Task 22
function sumAll(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0);
}
console.log(sumAll(1,2,3));
console.log(sumAll(10,20,30,40));

//Task 23
const array1=[1,2];
const array2=[3,4,5];
const mergedArray=[...array1,...array2];
console.log(mergedArray);
const originalArray=[10,20,30];
const copiedArray=[...originalArray];
copiedArray.push(40);
console.log(originalArray);
console.log(copiedArray);

//Task 24
const user={
    name:"Aisha",
    age:21
};
const contact={
    email:"aisha@nti.com",
    age:22
};
const mergedUser={...user,...contact};
console.log(mergedUser);

//Task 25
const values=[2,4,6,8];
function total(a,b,c,d){
    return a+b+c+d;
}
console.log(total(...values));


//Task 26
let person1={
    name:"Aisha",
    child:{
        age:5
    }
};
let person2=person1;
person2.name="Aisha Changed";
console.log(person1.name);


//Task 27
const original={
    name:"Aisha",
    details:{
        city:"Giza"
    }
};
const shallowCopy={...original};
shallowCopy.name="Aisha Amer";
shallowCopy.details.city="Cairo";
console.log(original);
console.log(shallowCopy);

//Task 28
const deepCopy=structuredClone(original);
deepCopy.details.city="Alex";
console.log(original);
console.log(deepCopy);

//Task 29
const userData={
    name:"Aisha",
    age:21,
    city:"Giza"
};
const userDataString=JSON.stringify(userData);
localStorage.setItem("userdata",userDataString);
const storedData=localStorage.getItem("userdata");
const parsedData=JSON.parse(storedData);
console.log(typeof parsedData);
console.log(parsedData);
localStorage.removeItem("userdata");

//Task 30
const APP_CONFIG={
    name:"AishaApp",
    version:"1.0.0",
    api:{
        baseUrl:"https://api.aisha.com",
        timeout:30000
    },
    features:[]
};
APP_CONFIG.api.timeout=60000;
APP_CONFIG.features.push("dark-mode");
console.log(APP_CONFIG);
try{
    APP_CONFIG={};
}catch(error){
    console.log(error.message);
}

//Task 31
function createCard(title,price=0,...tags){
    return{
        title:title,
        price:price,
        tags:tags,
        label:`${title} - ${price} EGP`
    };
}
const card1=createCard("Aisha Laptop",15000,"electronics","computer");
const card2=createCard("Aisha Mouse",500,"electronics");
console.log(card1);
console.log(card2);

//Task 32
const students=[
    {name:"Aisha",grade:95},
    {name:"Mona",grade:90},
    {name:"Aya",grade:85}
];
for(const{name,grade}of students){
    console.log(`${name} scored ${grade}`);
}