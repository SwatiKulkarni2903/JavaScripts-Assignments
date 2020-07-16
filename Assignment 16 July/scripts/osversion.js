console.log("OS Version");

let str = window.prompt("Enter os name and version : ");
let res = str.split(" ");
console.log(typeof res);
console.log(`The os name is ${res[0]} and version is ${res[1]}`);