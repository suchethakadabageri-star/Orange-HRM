//Conditional statements: allows us to execute different block of codebased on different conditions.

// if Statement  -- Handle only the positive scenarios.
// if else Statement -- Handle both positive and negative scenarios.
// if else if Statement -- Handle multiple scenarios.
// switch Statement -- 
// Ternary Operator

//if Statement - It will execute the if block of code only if the condition id true.

/*
if(condition){
code to be executed if condition is true
}
*/

if(true){
    console.log("this is true statement");
}

if(true){
    console.log("this is true statement");
}
else{
    console.log("the statement is false")
}

const browser = "chrome";
if(browser === "Edge"){
    console.log("Launch the Edge Browser")
}
else if(browser === "Chrome")
{
    console.log("Launch the Chrome Browser")
}
else if(browser === "Firefox")
{
    console.log("Launch the Firefox Browser")
}
else{
    console.log("Launch the Safari Browser")
}


//switch: will compare with case value and execute the block of code if the case value is matching.

/*switch(expression){
    case "value":
        block of code
        break;

        case "value1":
            block o fcode
            break;
}
*/
let browse = "Edge"

switch(browse){
    case "Edge":
        console.log("Launch the Edge Browser");
        // break;
        case "Chrome":
            console.log("Launch the Chrome Browser");
            break;
            case "FireFox":
                console.log("Launch the FireFox")
                break;
                default:
                    console.log("Launch the Safari Browser");

}


//When to use Switch and if else if statement?

/*if else if can be used:
Whenever we have multple conditions to check,
When we have multiple data types to check,
 When the Range is available,
 When we have logical operators to check,

 switch can be used:
 Simple validation with single data type, single value compare
 should not be any range
 No logical operators should be used
*/

/*Ternary Operator: 
It is a short hand for if else statement. 
It is also called as conditional operator. 
It takes three operands. 
The first operand is a condition followed by a question mark (?).
The second operand is the expression to be executed if the condition is true followed by a colon (:).
The third operand is the expression to be executed if the condition is false.
*/

// syntax:

//condition ? execute this if true : execute this if false;

let age = 20;
const result = (age>=18) ? "You are eligible to vote" : "You are not eligible to vote";
console.log(result);

//Display Grade of a student

const percentage = 85;

if(percentage >90)
{
    console.log("Grade A");

}
else if(percentage > 80 && percentage <90)
{
    console.log("Grade B");
}
else if(percentage > 70 && percentage <80)
{
    console.log("Grade C");
}
else if(percentage > 50 && percentage <70)
{
    console.log("Grade D");
}
else{
    console.log("Failed")
}