console.log(document)
let x=document.getElementsByTagName('h1');
console.log(x[0]);
let  y=document.getElementsByClassName('bujji');
console.log(y[0]);
let z=document.getElementById('chitti');
console.log(z);

let p=document.querySelector('.bujji');
console.log(p);
let q=document.querySelectorAll('.bujji')
console.log(q[0]);

function changeChitti()
{
    let element =document.getElementById("chitti")
    console.log(element.textContent)
    element.textContent="Bye bye DOM"
}