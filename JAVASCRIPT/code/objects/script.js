let obj={
    name1:"vijay",
    age:"24",
    display:function(){
        console.log("hello world "+ this.name)
    },
}
console.log(obj.name1,obj['name'])
obj.display();
console.log(obj.age);

//object destructuring
let{name1,age}=obj;
console.log(name1,age);
//array destructuring
let arr=[5,6];
let[a,b]=arr;
console.log(name1,age)