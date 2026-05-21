let age = 20

console.log(`Your age is ${age}`)  // backtick

let str = 'Welcome to JavaScript'

//1. length - Returns the number of characters in a string
// Syntax -- stringName.length
console.log(str.length)


//2. charAt() - Returns the character at a specified index in a string
//Syntax -- stringName.charAt(index)

console.log(str.charAt(4))

//"abcdabcd" -- a2b2c2d2

//3. concat() - Joins two or more strings and returns a new string
//Syntax -- string1.concat(string2, string3, ...)

console.log(str.concat("Hello", "JavaScript"))

//4. indexOf() - Returns the index of the first occurrence of a specified value in a string
//Syntax -- stringName.indexOf(searchValue, fromIndex)

//What is difference between slice() and substring()

//5. slice()
//slice(startIndex?,endIndex?)
//stringName.slice()
console.log(str.slice())
console.log(str.slice(2,9))

//6. substring()
//substring(startIndex, endIndex?)
console.log(str.substring(2))
console.log(str.substring(2,9))

console.log(str.slice(9,2)) // returns empty string because startIndex is greater than endIndex
console.log(str.substring(9,2)) // substring() method swaps the indexes if startIndex is greater than endIndex

//7. startsWith() - Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
console.log(str.startsWith("w"))
console.log(str.startsWith("W"))

//8. endsWith() - Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
console.log(str.endsWith("t"))
console.log(str.endsWith("T"))

//9. toUpperCase() - Converts a string to uppercase letters
console.log(str.toUpperCase())

//10. toLowerCase() - Converts a string to lowercase letters
console.log(str.toLowerCase())


let str2 = "   This is an element   "

//11. trim() - Removes whitespace from both ends of a string
console.log(str2.length)
console.log(str2.trim().length)


//12. trimStart() - Removes whitespace from the beginning of a string
console.log(str2.trimStart().length)

//13. trimEnd() - Removes whitespace from the end of a string
console.log(str2.trimEnd().length)

//16. spit() - Splits a string into an array of substrings, and returns the new array
//Syntax -- stringName.split(separator, limit)

let str3 = "Apple Banana Mango Orange"
let fruits = str3.split(" ") // splits the string into an array of substrings using space as a separator
console.log(fruits) // Output: ["Apple", "Banana", "Mango", "Orange"]

let email = "suchetha.kadabageri@talentica.com"
let emailParts = email.split("@") // splits the email into two parts using "@" as a separator
console.log(emailParts) // Output: ["suchetha.kadabageri", "talentica.com"]
console.log(emailParts[1]) // Output: "talentica.com"

console.log(emailParts[1].split(".")[0]) // Output: ["talentica", "com"]