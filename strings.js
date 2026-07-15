//String Methods
//Backtick is used to wright string in multiple lines and also used to wright string with values of variables and expressions (String Parameterization)

//length
let str = "Welcome to Strings"
const result = str.length
console.log(result)

//charAt(index): returns the character at the specified index

const result1 = str.charAt(5)
console.log(result1)


let str1 = "Welcome to Javascript"
let str2 = "Welcome to Strings"

const result2 = str.concat(str1,str2)
console.log(result2)

//What is difference between slice() and substring()

//slice(startIndex?,endIndex?): returns the part of string.
console.log(str.slice())
console.log(str.slice(2,7))
console.log(str.slice(7,3))

//subsctring(stratIndex,endIndex?): returns the part of string

console.log(str.substring(3))
console.log(str.substring(9,2))

//startsWith(string): It checkes the string is starting eith specified string or character

console.log(str.startsWith("W"))

//endsWith(string)
console.log(str.toUpperCase().endsWith("S"))

//trim(): remove unnecessary trailing and leading spaces
//trimStart(): remove leading and trailing space from starting
//trimEnd(): remove leading and trailing space from the end

//split(seperator): Splits the string into array of substring based on specified seperator

let string = "Apple Banana Orange"
console.log(string.split(" "))

let email = "suchetha@qamitra.com"
const domain = email.split("@")

console.log(domain)
console.log(domain[1].split(".")[0])
