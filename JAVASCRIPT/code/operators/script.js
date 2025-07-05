//Arithmetic operators
let a = 434,b = 43;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//logical operators
console.log((a>43) && (b<54));
console.log((a>43)||(b<34));
console.log(!(a<500));

//Relational operators
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
a = "a", b = 2;
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

//Assignment operators
a = 5, b = 3;
console.log(a += 1);
console.log(a -= 1);
console.log(a *= 1);
console.log(a /= 1);
console.log(a %= 3);
console.log(a **= 2);


// unary operators
// unary +  -- it will convert any value into number
console.log(2 + '2')//22
console.log(2 + +'2')//4
// increment ++  -- will increase value by 1
a = 2;
a++;
console.log(a)
//++a  -- pre increment -- update, assign
//a++ -- post increment -- assign, update
a = 5;
//let x = ++a;
//let x = a++;
let x = ++a + a++ + ++a;
console.log(x)
//--a  -- pre increment -- update, assign
//a-- -- post increment -- assign, update
a = 5, b = 2;
// x = a++ + --b + ++a + b--; //5+1+7+1

x = a++ + b;
console.log(x, a)



// ternary operator
a = 5, b = 2;
const c = (a >= b) ? a : b;
console.log(c)

let res=(a % 2 == 0) ? "even":"odd";
console.log(res)
