console.log("Calculator +-*/%");

let a = parseInt(window.prompt("Enter first number :"));
let b = parseInt(window.prompt("Enter second number :"));
let op = window.prompt("Enter the operation i.e. Add , Substract , Multiply , Divide ,  Remander");

switch(op)
{
    case '+':console.log(`Addition is : ${a+b}`);
             break;
    case '-':console.log(`Substraction is : ${a-b}`);
             break;
    case '*':console.log(`Multiplication is : ${a*b}`);
             break;
    case '/':console.log(`Division is : ${a/b}`);
             break;
    case '%':console.log(`Reminder is : ${a%b}`);
             break;
    default :console.log("Enter valid information :(");

}