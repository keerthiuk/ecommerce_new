

var x = 2;
console.log(2 == x) // true 
console.log('2' == x) // true 

console.log(2 === x) // true 
console.log('2' === x) // false

console.log('\n')
//check whether the given number is postive or negative

// var num=prompt("ENTER NUMBER:");
var num = 4;
if (num > 0) {
    console.log("the number is positive");
}
else
    console.log("the number is negetive");


// check whether greatest among two numbers

var a = 30;
var b = 40;

// "szvgfsh0" +a + "sdgvfsg"   +a + "sdgvfsg"   +a + "sdgvfsg"   +a + "sdgvfsg"   +a + "zdhbfxh"
// `xdgfx ${a} gfch ${d}`
// console.log(a)

if (a > b) {
    console.log("the greater number is:" + a);
}
else
    console.log(`the greater number is : ${b}`);

//check whether the given number is postive ,zero or negative using if...else if...else

var a = -10;
if (a > 0) {
    console.log("the number is positive");
}
else if (a == 0) {
    console.log("the number is zero");
}
else {
    console.log("the number is negetive");
}

//check whether the given number is postive ,zero or negative using nested if


var a = 10;
if (a >= 0) {
    if (a == 0) {
        console.log("the number is zero");
    }
    else {
        console.log("the number is positive");
    }
}
else {
    console.log("the number is negetive");
}

//check greatest among 3 numbers

var a = 100;
var b = 90;
var c = 500;

if (a > b) {
    if (a > c) {
        console.log(`${a} is greater`);
    }
    else {
        console.log(`${c} is greater`);
    }
}
else if (b > c) {
    console.log(`${b} is greater`)
}
else
    console.log(`${c} is greater`);


// check whether a number is odd or even

var a = 10;
if (a % 2 == 0) {
    console.log("the number is even");
}
else
    console.log("the number is odd");

//if..else if..else 

var a = 4;
// var a =prompt("enter a number:");
if (a == 0) {
    console.log("sunday");
}
else if (a == 1) {
    console.log("monday");
}
else if (a == 2) {
    console.log("tuesday");
}
else if (a == 3) {
    console.log("wednesday");
}
else if (a == 4) {
    console.log("thursday");
}
else if (a == 5) {
    console.log("friday");
}
else if (a == 6) {
    console.log("saturday");
}
else {
    console.log("invalid");
}

//switch condition

// var a = Number(prompt("enter a number:"));
var a = 4;
switch (a) {
    case 0: console.log("sunday");
        break;
    case 1: console.log("monday");
        break;
    case 2: console.log("tuesday");
        break;
    case 3: console.log("wednesday");
        break;
    case 4: console.log("thursday");
        break;
    case 5: console.log("friday");
        break;
    case 6: console.log("saturday");
        break;
    default: console.log("invalid");
}

// input mark: 
// 45 above A grade  
// 40 Bgrade
// 35 Cgrade
// 30 Dgrade
// Below 20 failed
var mark = 33;
if (mark > 45) {
    console.log("A grade scored");
}
else if (mark < 45 && mark >= 40) {
    console.log("B grade scored");
}
else if (mark < 40 && mark >= 35) {
    console.log("C grade scored");
}
else if (mark < 35 && mark >= 30) {
    console.log("D grade scored");
}
else if (mark < 20) {
    console.log("Failed!");
}