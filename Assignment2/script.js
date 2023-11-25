
/**
 * Your task is to create a program that advises a group of environmental scientists 
 * how to handle the growth and spread of a unique plant species under their supervision. 
 * You must develop a growth control system that will monitor and predict the plant growth, making decisions 
 * based on the available space and potential growth.
Here is the information you have been given:
The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, 
squared: const PI = 3.1415; const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.
 */

const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
console.log(`Area of the circular plot:${area}`);

let spaceRequired =0.8;//this is in square meter
let initialPlants =20;
let maxplantsplanted = area/spaceRequired; 
console.log(`Plants can be planted in this circular area: ${maxplantsplanted}`);

/**Using this information, your objectives are to:
Predict the plant growth after a specific number of weeks.
Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks
is greater than 80% of the maximum capacity of the garden.
Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden
after the given number of weeks.
Planted, if there is room to plant more plants.
This condition should be met if the plant count after the 
given number of weeks is less than 50% of the maximum capacity of the garden.
Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs */


     let numWeek1=1;
     let numplantAfterNumWeek1 = initialPlants * Math.pow(2 , numWeek1);
     for(i=0;numplantAfterNumWeek1 < maxplantsplanted ; i++)
     {
        numplantAfterNumWeek1 = numplantAfterNumWeek1 * 2;
     }
              
     
       if(numplantAfterNumWeek1 > 0.8 * maxplantsplanted)
        {
            console.log("pruned");
        }else if((numplantAfterNumWeek1 > ( 0.5 * maxplantsplanted)) && (numplantAfterNumWeek1 <= (0.8 * maxplantsplanted)))
        {
            console.log("Monitored");
        }else(numplantAfterNumWeek1 < 0.5 * maxplantsplanted)
        {
            console.log("planted");
        }    


