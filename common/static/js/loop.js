console.log('\n')
console.log('\n')
console.log('print 0-10')
console.log('\n')

for (i = 0; i <= 10; i++) {
    console.log(i);
}

console.log('\n')
console.log('print 10-0')
console.log('\n')

for (i = 10; i >= 0; i--) {
    console.log(i);
}


console.log('\n')
console.log('print sum of n numbers')
console.log('\n')

var s = 1;
var n = 10;
var sum = 0;
for (i = 0; i <= n; i++) {
    sum = i + s;
    console.log(sum);
}

console.log('\n')
console.log('print even numbers ')
console.log('\n')

var n = 10;
for (i = 0; i <= 10; i++) {
    if (i % 2 == 0 && i != 0)
        console.log(i);
}

console.log('\n')
console.log('multiplication table of number input using for loop')
console.log('\n')


var num=4;
var mul=1;
 for(i=1; i<11; i++){
    mul=num*i;
    console.log(mul);
 }

console.log('\n')
console.log('sum of n numbers')
console.log('\n')


var num=10;
 var s=0;
 for(i=1;i<=num;i++){
    s=s+i;
     }
     console.log(s);


console.log('\n')
console.log('print 1-10 using while loop')
console.log('\n')


 var i=1;
 var n=10;
while(i<=n){
    console.log(i);
    i++;
}


console.log('\n')
console.log('print 1-10 using do..while loop')
console.log('\n')


var a=1;
var num=10;
do{
    console.log(a);
   a++;
}while(a<=num)


console.log('\n')
console.log('for in loop')
console.log('\n')

var student = { name: 'abc', class: '9' };
for (prop in student) {
    console.log(`${prop} is ${student[prop]} `);
}

console.log('\n')
console.log('for of loop')
console.log('\n')

hardware = ['keyboard', 'mouse', 'mitherboard'];
for (item of hardware) {
    console.log(item);
}