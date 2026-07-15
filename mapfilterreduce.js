// 1. map()

let numbers = [1,2,3]
let newNumbers =numbers.map((num) => (num*2)+1)
console.log(newNumbers)

//F -> C
let fahrenheit = [32,68,100]
let celsius = fahrenheit.map((temp) => (temp-32)*5/9)
console.log(celsius)

//2.filter()
let age = [12,18,20,60,75]

let seniorCitizens =age.filter((s) => {
    return s>=60
})
console.log(seniorCitizens)


let employees = [
    {name: 'Alice', department: 'HR'},
    {name: 'Bob', department: 'Engineering'},
    {name: 'Charlie', department: 'HR'},
    {name: 'David', department: 'Engineering'},
    {name: 'Suchi', department: 'Engineering'}
]

let engineeringEmployees = employees.filter((emp) => emp.department === 'Engineering')
console.log(engineeringEmployees)


//3. reduce()

let num = [2,4,6,8,10]

let sum = num.reduce((acc,num) => {
    return acc+num
}, 0)
console.log(sum)

//max number in an array

let array = [5,2,9,1,5,6]

let max =array.reduce((acc,num) => {
    if(num > acc)
    {
        return num
    }
    else{
        return acc
    }
})
console.log(max)


//min number in an array

let num1 = [5,6,7,9,10,2,85]
let min =num1.reduce((acc,num1) => {
    if(acc<num1)
    {
        return acc
    }
    else{
        return num1
    }
})
console.log(min)


//TotalPrice of products in cart

let cart = [
    {product: 'Laptop', price: 1000},
    {product: 'Phone', price: 500},
    {product: 'Headphones', price: 100}
]
let totalPrice =cart.reduce((total,item) => total + item.price,0);
console.log(totalPrice)
