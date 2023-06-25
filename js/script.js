var a = 'A ';
var b = 'Flower ';
var c = "Need ";
var z = `Water `;

console.log(a+b+c+z); //+ sign used as a concetenation operator.

var xx = 10;
var yy = 20;
console.log(xx + yy); //+ sign used as a addition operator.

//1. Function Defination
function myFunA(x,y){ //x & y are formal arguments/parameter.
    //function body
    //Every function return something.
    return x+y;
}

//2. function calling/invoking
let result = myFunA(10,30);
console.log(result);


//* Function Argument
let r2 = myFunA(10,myFunA(10,30));
console.log(r2);

//1. Function Defination
function myFunB(a,b){ //This is a formal argument.
    //function body // Every function return something.
    return a-b;
}

//2. call/invoke
let r3 = myFunB(30,10); //This is a actual argument.
console.log(r3);

let r4 = myFunB(40,myFunB(20,10)); //This is function argument.
console.log(r4);

//1. function Defination
function myFunC(c,d){
    //function body
    //Every function return something
    return c*d;
}
//2. function invoking
let r5 = myFunC(myFunA(5,2),myFunB(7,5));
console.log(r5);

//1. function definition
function myFunD(e,f){
    //function body
    //every function return something.
    return e/f;
}
//2. call/invoke
let r6 = myFunD(12,3);
console.log(r6);

let r7 = myFunD(myFunB(20,10),myFunA(3,2));
console.log(r7);