// Task 1
var fullName="Aisha Amer";
console.log(fullName.length);

// Task 2
var sentence="I am learning Javascript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// Task 3
var email="aishaamer848@gmail.com";
console.log(email.includes("@"));

// Task 4
var word="JavaScript";
console.log(word[0]);
console.log(word[word.length-1]);

// Task 5
var text="This is bad day";
text=text.replace("bad","good");
console.log(text);

// Task 6
var sentence2="I love coding";
var words=sentence2.split(" ");
var result=words.join("-");
console.log(result);

// Task 7
var text2="   nti egypt training   ";
text2=text2.trim();
text2=text2.toUpperCase();
text2=text2.replace("EGYPT","CAIRO");
console.log(text2);

// Task 8
var num="45.8";
num=Number(num);
console.log(num);

// Task 9
var number=7.6;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

// Task 10
var a=12;
var b=5;
var c=28;
var d=9;
console.log(Math.max(a,b,c,d));
console.log(Math.min(a,b,c,d));

// Task 11
var randomNum=Math.floor(Math.random()*20)+1;
console.log(randomNum);

// Task 12
var price=19.4567;
console.log(price.toFixed(2));

// Task 13
var numbers=[];
for(var i=0;i<5;i++){
var randomNumber=Math.floor(Math.random()*50)+1;
numbers.push(randomNumber);
}
console.log(numbers);
var max=Math.max(...numbers);
var min=Math.min(...numbers);
var sum=0;
for(var num of numbers){
sum=sum+num;
}
var average=sum/numbers.length;
console.log("Largest:",max);
console.log("Smallest:",min);
console.log("Average:",average.toFixed(2));

// Task 14
for(var i=1;i<=20;i++){
console.log(i);
}

// Task 15
for(var i=1;i<=15;i++){
if(i%2!=0){
console.log(i);
}
}

// Task 16
var i=10;
while(i>=1){
console.log(i);
i--;
}

// Task 17
var names=["Sara","Omar","Mona","Youssef"];
for(var name of names){
console.log(name);
}

// Task 18
for(var i=1;i<=10;i++){
if(i==7){
break;
}
console.log(i);
}

// Task 19
for(var i=1;i<=3;i++){
for(var j=1;j<=10;j++){
console.log(i+" x "+j+" = "+(i*j));
}
}

// Task 20
for(var i=1;i<=30;i++){
if(i==25){
break;
}
if(i%3==0){
continue;
}
console.log(i);
}

// Task 21
var word2="HELLO";
for(var letter of word2){
console.log(letter);
}

// Task 22
var numbers2=[10,20,30,40];
var total=0;
for(var num of numbers2){
total=total+num;
}
console.log(total);

// Task 23
var sentence3="JavaScript is amazing and awesome";
var count=0;
for(var letter of sentence3){
if(letter=="a"||letter=="A"){
count++;
}
}
console.log(count);

// Task 24
var grades=[70,85,92,68,77,88];
for(var grade of grades){
if(grade%2==0){
console.log(grade);
}
}

// Task 25
for(var i=1;i<=5;i++){
var stars="";
for(var j=1;j<=i;j++){
stars=stars+"*";
}
console.log(stars);
}

// Task 26
var studentNames=["ahmed","sara","omar","laila","hassan"];
var matchedCount=0;
for(var name of studentNames){
var upperName=name.toUpperCase();
if(upperName.startsWith("A")||upperName.startsWith("S")){
console.log(upperName);
matchedCount++;
}
}
console.log("Count:",matchedCount);