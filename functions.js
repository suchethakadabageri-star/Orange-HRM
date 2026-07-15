//functions : Is a set of instructions that perform specific taks.
//We use function to solve the problem of duplication and maintainance and reuse of code.

/* 1. Named function: function declaration
2. Anonymous function: function expression
3. Arrow function: ES6 feature: lambda function
4. Constructor function: used to create object*/

//Named function: function declaration: Function which will be declared along with the name.
// function functionName(parameter1, parameter2) : function declaration/definition
// {
//    code to be executed
// }
//functionName(argument1, argument2) : function call

// Anonymous function: function expression: function which will be declared without the name and assigned to a variable.

//callback function: function which will be utilized as parameter of another function.

function add(fun,Function)
{
   fun()
}
add(function(){
   console.log("This is callback function")
})

let message = function(name,age,gender)
{
   console.log(`The name is ${name}, age is ${age}, gender is ${gender}`)
}
message("John",25,"Male")

//arrow function:

let details = ((name,age,gender)=> console.log(`The name is ${name}, age is ${age}, gender is ${gender}`))
details("John",25,"Male")

//Default parameter & Optional Parameter

function sum(a,b=10){
   console.log(a+b)
}
sum(5,13)

//default parameter: parameter which has default value
//Main purpose of provind default parameter is to achive method overloading
//Methos overloading is process where we can declare same method name with different parameter
//Optional parameter: parameter may or may not be passed to the function.
// function user(name,age?)
// {
//    console.log(`The name is ${name}, age is ${age}`)
// }
// user("John")

function display(name,age)
{
   console.log(`The name is ${name}, age is ${age}`)
}
display("John")
display("Rohn",25)