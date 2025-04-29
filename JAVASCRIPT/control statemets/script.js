//simple if
if (name=="raj");
{
    console.log("welcome to raj")
}

//if---else
let age=20;
if (age>=18)
{
    console.log("Eligible to vote");
}
else
{
console.log("Not eligible to vote")
}

//if else if ladder
let a=100;
if ((a>=100)&&(a<1000))
{
    console.log('${a} is 3 digit number')
}
else if((a<100)&&(a>=10))
{
    console.log("${a} is 2 digit number")
}
else
{
    console.log("undefined input")
}

//check the gender of person, only males who are above 18 are eligible for this job. use appropriates else cases
let gender='M',years=22;
if(gender=="M")
    {
    if(years>18)
    {
       console.log("you are eligible")
    }
    else
    {
       console.log("males less theann 18 are not eligible")
    }
}
else
{
    console.log("females are not eligible")
}

//switch statements
let day=0;
switch(day)
{
    case 0:console.log("sunday");break;
    case 1:console.log("Monday");break;
    case 2:console.log("Tuesday");break;
    case 3:console.log("Wednesday");break;
    case 4:console.log("Thursday");break;
    case 5:console.log("Friday");break;
    case 6:console.log("Saturday");break;
    default:console.log("please enter value between 0-6");
}