/**
 *
 * Control Flow and Error Handling Notes
 *
 */

/**
 * Scope
 */
// Global Scope
var pollution = 'sucks'; // pollutes the global window object
let globalPollution = 'avoided';

// Block Scope
// Don't use var
// {
//   var x = 1;
//   {
//     var x = 2; // same variable!
//     console.log(x); // 2
//   }
//   console.log(x); // 2
// }

let x = 10;

{
  let a = 1;
  {
    let x = 2; // different variable
    // console.log(x); // 2
  }
  // console.log(x); // 10
}

// console.log(a); // Reference Error

/**
 * Control Flow and Conditionals
 */

let foo = 0;
//foo is undefined, false

// !foo would also work
if (42) {
  console.log('foo has a value :)');
} else {
  foo = 10;
  console.log('foo was falsy, just changed it');
}

if (foo === 10) {
  // runs if conditional is true
  console.log('foo is 10!');
} else {
  // runs if conditional is false
  console.log('foo is NOT 10:(');
}

console.log(foo);

let num=18;

if(num>0){
    console.log("num is positive");
}else{
    console.log("num is negative")
}



if(num>=18){
    console.log("Access granted")
}else {
    console.log("access Denied")
}


//checking condition num1
let num1 =100;
if(num1 > 0 && num1 >= 100){
    console.log("Num1 is positive");
}else if(num1 > 0 && num1 <100 ){
    console.log("Num1 is positive again ");
}else{
    console.log("Num1 is negative")
}


//Grade
let grade=95;
if(grade>=90){
    console.log("A")
}else if(grade>=80){
    console.log("B")
}else if(grade>=70){
    console.log("C")
}else if(grade>=55){
    console.log("D")
}else{
    console.log("F")
}

/**
 * Switch Statements
 */
let case1 = '0';
let g = 0;
switch (g) {
  case case1:
    console.log('0');
    break;
  case '1':
    console.log('1');
    break;
  case '2':
    console.log('2');
    break;

  default:
    console.log('Please enter a string :)');
    break;
}
//if broken, code resumes here




const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

let spaceRequired =0.8;//this is in square meter
let initialPlants =20;
let maxCapacity = area/spaceRequire; 

let numWeek=1;
//20 times number of week to the power of 2
const numPlantAfterNumWeek = initialPlants * Math.pow(2 , numWeek);
if (numPlantAfterNumWeek > maxCapacity) {
    numPlantAfterNumWeek = maxCapacity;
}
console.console.log(numPlantAfterNumWeek);