console.log("Prompt a number !!");

/* do{
let num = parseInt(window.prompt("Enter a number :"));
}while(num < 100); */

let no;
function trial()
{
    no = parseInt(window.prompt("Enetr a number :"));
    return no;
}

function test()
{
let res = trial();
res>100 ? console.log(`Number is ${res}`) : test();
}
test();

//console.log("number is "+num);
