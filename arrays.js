let myArray = [] // Empty Array
let myArray2 = [1,2,3,5,6,7] // Array with numbers
let myArray3 = ["hello", "World"] // Array with Strings


//push() method adds a new elemnet at the end

let lang = ["Python", "Java", "C++"]

lang.push("JavaScript") // Adds JavaScript at the end of the array

console.log(lang) // Output: ["Python", "Java", "C++", "JavaScript"]

//pop() method removes the last element from the array

lang.pop() // Removes JavaScript from the array
console.log(lang) // Output: ["Python", "Java", "C++"]

//shift() method removes the first element from the array

//lang.shift() // Removes Python from the array
let firstLang = lang.shift() // Removes Java from the array and stores it in firstLang variable
console.log(firstLang) // Output: ["Java", "C++"]

//unshift() method adds a new element at the beginning of the array

lang.unshift("Ruby") // Adds Ruby at the beginning of the array
console.log(lang) // Output: ["Ruby", "Java", "C++"]

//splice() method can be used to add or remove elements from the array
let animals = ["Dog", "Cat", "Elephant", "Lion"]

let newAnimals = animals.splice(2, 2, "Tiger") // Output: ["Elephant", "Lion"]
console.log(animals) // Output: ["Dog", "Cat", "Tiger"]

//slice() method can be used to create a new array from a portion of an existing array

//concat() method can be used to merge two or more arrays
let arr1 = ['java', 'python', 'c', 'c++']
let arr2 = ['ruby', 'javascript', 'go']

let concatArray = arr1.concat(arr2)
console.log(concatArray)


//indexof()

let colors = ['red', 'green', 'white', 'black', 'red']

let index = colors.indexOf('red', colors.indexOf('red')+1)
console.log(index)

//All indexes

let array = ['red', 'green', 'white', 'black', 'red', 'Yellow', 'Blue', 'red']

let index1 = []

array.forEach((value, i) => {
    if (value === 'red') {
        index1.push(i)
    }
})
console.log(index1)