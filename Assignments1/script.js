

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Check if all numbers are divisible by 5. 
//Cache the result in a variable.

const divby = (n1%5==0) && (n2%5==0) && (n3%5==0) && (n4%5==0) 
console.log(divby);

//Check if the first number is larger than the last. 
//Cache the result in a variable.

const largerthan = n1 > n4;
console.log(largerthan);

/**
 * Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
 */

const arithmeticchain =  ((n2 - n1 ) * n3)  % n4 ;
console.log(arithmeticchain);

/**
 * Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
 * in other logic comparisons. Rename the variable as appropriate.
 */

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const less25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isOver25);
console.log(less25);
/**
 * You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.
 */

const  gallonsrequired30miles = 1500 /30 ;
console.log(`gallons required for 30miles:  ${gallonsrequired30miles}`);

const  gallonsrequired40miles = 1500 /40 ;
console.log(`galolns required for 40miles:  ${gallonsrequired40miles}`);

const  gallonsrequired50miles = 1500 /50 ;
console.log( `gallons required for 50miles:  ${gallonsrequired50miles}`);


const fuelcost30miles =  gallonsrequired30miles * 3;
console.log(`fuelcost for 30miles:${fuelcost30miles}`);

const fuelcost40miles =  gallonsrequired40miles * 3;
console.log(`fuelcost for 40miles:${fuelcost40miles}` );

const fuelcost50miles =   gallonsrequired50miles * 3;
console.log(`fuelcost for 50miles:${fuelcost50miles}`);

const budgetenough = (175 > fuelcost30miles) && (175 > fuelcost40miles) &&  (175 > fuelcost50miles);
console.log(`Is that budget enough:${budgetenough}`);

const tripdurationat55miles = 1500/55;
console.log(`trip duration at 55miles/hour: ${tripdurationat55miles}`);

const tripdurationat60miles = 1500/60;
console.log(`trip duration at 60miles/hour: ${tripdurationat60miles}`);

const tripdurationat75miles = 1500/75;
console.log(`trip duration at 75miles/hour: ${tripdurationat75miles}`);


