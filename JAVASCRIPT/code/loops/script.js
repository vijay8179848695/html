//loops
let i=1;
while(i<10){
    console.log(i);
    i++;
}

//do while
let j=1;
do
{
    console.log(j);
    j++;
}while(j<10);

//nested while
let v=25;
while(v>=1){
    if(v%2==0)
    {
        console.log(v)
    }
    v--
}

let r=1;
while(r<=4){
    let c=1,
    stars=""
    while(c<=r){
        stars=stars+"* "
        c++
    }
    console.log(stars)
    r++
}

//test
for (let i=10;i>=1;i--)
{
    console.log(i);
}

let arr=[5,3,7,8,9,1];
for (let i=0;i<=arr.length;i++){
console.log(arr[i])
}

//for of 
for(let e of arr)
{
    console.log(e)
}

//for in
let obj={
    name:"vijay",
    age:50
}
for (let e in obj)
{
    console.log(obj[e],e)
}