//loops : Will execute the block {...} of code multiple times until the condition becomes false.
/*
syntax:
for(intialization; condition; increment/decrement)
{
code to be executed
}
*/

/*
for loop
--------------
1. for loop   -- Traditional for loop - when we know that number of times to run the iteration.
2. for of loop-- looping through itrable objects - array, string,...
3. for in loop-- looping through properties of an object- {key:value}
ex: Dropdown - countries - for loop - 250 iterations

while loop  -- When we do not know how many times to run the iteration.
ex: calendar date : while loop
ex: search a product in e-commerce site - pagination - lazy loading

do while loop -- when we want to execute the code atleast once before checking the condition.
ex: Login page
*/

for(let i=0;i<10;i++)
{
    if(i===5)
    {
        continue;
    }
    console.log("The value of i is:" + i);
    
}

/* while loop syntax:

intialization;
while(condition){
code to be executed
increment/decrement
}

break: To exit the loop when the condition is true.
constinue: To skip the current iteration and continue with the next iteration.*/