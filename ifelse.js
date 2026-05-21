function checkAge(age)
{
    if(age > 18)
    {
        console.log("Eligible for voting")
    }
    else if (age == 18)
    {
        console.log("Wait for on e more year to Vote")
    }
    else{
        console.log("Not Eligible for voting")
    }
}
checkAge(10)
checkAge(18)
checkAge(20)



function checkNumber(num)
{
    if(num>0)
    {
        console.log("Positive Number")
    }
    else if(num<0)
    {
        console.log("Negative Number")
    }
    else
    {
        console.log("Zero")
    }
}
checkNumber(10)



function checkGrade(marks)
{
    let grade;
    if(marks >=90)
    {
        grade = 'A';
    }
    else if(marks >=80)
    {
        grade = 'B'
    }
    else if(marks >=70)
    {
        grade ='C'
    }
    else{
        grade = 'D'
    }
    console.log(grade);
}
checkGrade(95)
checkGrade(80)
checkGrade(71)
checkGrade(60)
