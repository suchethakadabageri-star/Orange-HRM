//print 1 to 10 using for loop

for(let i=1; i<=10;i++)
{
    
 console.log(i);

   
}


for(let i=1; i<=20; i++)
{
    if(i%2===0)
    {
    console.log(i);
    }
}

//for...of loop

let arr = [1,2,4,5,7]

for(let num of arr)
{
    console.log(num);
}

console.log("-----")

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}



//while loop

let i=1;

while(i<=10)
{
    console.log(i);
    i++;
}

console.log("-----")

let j=10
while(j>=0)
{
    console.log(j);
    j--; // can also be --j or j-=1 or j=j-1
}
console.log("-----")

//for...in loop on objects

const user = {
    name: "John",
    age: 30,
    city: "New York"
}

for(let key in user)
{
        console.log(key, user[key]);
    
}