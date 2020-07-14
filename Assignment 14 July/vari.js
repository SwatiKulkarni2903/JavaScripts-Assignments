var a = 10;
var b=12;
console.log(a);
var a = 29;
console.log(a);



console.log(b);
//block of code start----------

{
    let b = 5;
    console.log(b);
    //let b = 15;   Uncaught SyntaxError: Identifier 'b' has already been declared
    //console.log(b);
    // But updation is possible
    b = 20;
    console.log(b); 
}

//bolck of code end-------------
console.log(b);



const c = 23;
console.log(c);

//c = 10; Uncaught TypeError: Assignment to constant variable.
//console.log(c);