function display()
{
    console.log("hello world")
}
display()

//sum of 2 numbers
function sum()
{
    let a=10,b=35;
    console.log(a+b);
}
sum();

//sum of 2 numbers with parameters
function sum1(a,b)
{
    console.log(a+b);
}
sum1(10,23);
sum1("vijay"," venky");

//task
function printLen(a)
{
    console.log(a.length)
}
printLen("vijay");

//sum with default values
function sum2(a,b=69)
{
    console.log(a+b);
}
sum2(10);
sum2(232,53)

//sum with rest
function sum3(...b)
{
    let sum=0;
    for (let i of b)
    {
        sum=sum+i;
    }
    console.log(sum)
}
sum3(443,43,43,3);

//take an arrray and pass multiple values to fuction and print their product
function product(...b)
{
    let product=1;
    for (let i of b)
    {
        product=product*i
    }
    console.log(product)
}
product(2,3,4,5,8);

//fuction 
function sum4(a,...b)
{
    console.log(a,b);
    let c=[a,b];
    console.log(c,c.length);
}
sum4(2,3,4,5,7);

//add two arrays 
let arr=[4,5,6], arr2=[3,2,1];
let arr3=[...arr,...arr2]
console.log(arr3)


let [a, ...c] = [6, 7, 8, 9, 10];
let b=[5,...[4,3],...[5,4],3]
console.log(b)

function sum(a,b)
{
    return a+b;
}
let res=sum(32,43);
console.log(res)


const sb=function(a,b)
{
    return a+b;
}
console.log(sb(4,5))

//task
function strLen(a)
{
    return a.length;
}
console.log(strLen("vijay"))
//function expression
let x=function(a)
{
    return a.length;
}
console.log(x("vijay"))
//arrow function
let y=(a)=>a.length
console.log(y("vijay"))

/*let z=(a,b)=>a-b
console.log(z(19,12))*/

//closure
function outer ()
{
    let x = 10;
    function inner(){
        x++;
        console.log(x)
    }
    return inner;
}
let z = outer()  // let z = inner
console.log(z)
z() //11
z() //12
z() //13

