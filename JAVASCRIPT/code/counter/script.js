let value=0;
let c=document.getElementById("count")
function add()
{
    value++;
    c.textContent=value
}
function less()
{
    value--;
    c.textContent=value
}
function reset()
{
    value=0;
    c.textContent=value
}