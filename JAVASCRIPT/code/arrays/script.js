let a=[6,3,0,2,2,5,8,9,5,1]
console.log(a[0]+a[7])
//arrray methods
console.log(a.length,a)
a.push(1,2)
console.log(a,a.length)
a.pop()
console.log(a)
a.pop()
console.log(a)
a.unshift(1,3)
console.log(a)
a.shift() 
a.shift()
console.log(a)
a.splice(8)
console.log(a)
a.splice(6,1)
console.log(a)
a.splice(2,2,8,4)
console.log(a)
a.reverse()
console.log(a)
console.log(a.indexOf(4))
a.push(9)
console.log(a)
console.log(a.lastIndexOf(9))
//forEach
let arr=[4,5,6,8];
arr.forEach(function(a,i)
{
console.log(a,i)
})

let names=["vijay","raj","venky"]
names.forEach(function(n,i)
{
    console.log(n.charAt(1));
})
//task
arr=[32,32,45,5];
let sum=0;
arr.forEach(function(n,i)
{
    sum=sum+n
})
console.log(sum)

arr=[[49,34],[87,87]]
let arr2=[]
arr.forEach(function(val)
    {
       console.log(val);
       let sum=0;
       val.forEach((v)=>
        {
            sum=sum+v;
        })
        arr2.push(sum)
    })
    console.log(arr2);


//for each cannot return values
arr=[1,2,3,4,5]
const arr4=arr.forEach((v)=>
{
    return v*2;
})
console.log(arr4);

let marks=[43,54,56,77,89,23,29]
//forEach
const arr5=arr.forEach((v)=>
    {
        return v*2;
    })
    console.log(arr5);
//map
const arr6=marks.map((v)=>
{
    if (v>=35)
    {
        return v;
    }
})
console.log(arr6);
//filter
const arr7=marks.filter((v)=>
{
    if (v>=35)
    {
        return v;
    }
})
console.log(arr7);
//some
const arr8=marks.some((v,i)=>
{
    return v%2==0;
})
console.log(arr8);
//every
const arr9=marks.every ((v,i)=>
{
    return v%2==0;
})
console.log(arr9);

//sort
let num=[5,45,26,25,,8,21,4,6,7]
console.log(num.sort());
num.sort((a,b)=>a-b);
console.log(num);
num.sort((a,b)=>b-a);
console.log(num)
//reduce
let num1=[1,2,3,4,5,6]
let res=num1.reduce((pr,cr)=>pr+cr,0);
console.log(res)
//falattering array
arr=[[5,3],[8,8],[4,9]]
let res2=arr.reduce((v,i)=>v.concat(i),[])
console.log(res2)