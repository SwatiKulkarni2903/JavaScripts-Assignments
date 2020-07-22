console.log("Multiplication Table !!");

let list = document.querySelector('#list');
console.log(list);

let num = window.prompt('Enter number :');

for(let i=1;i<=10;i++)
{
    list.innerHTML += `<li>${num}  *  ${i}  =  ${num*i}</li>`;
}

/* let arr=[1,2,3,4,5,6,7,8,9,10];

arr.forEach(element => {
    list.innerHTML += `<li>${num} * ${element} = ${num*element}</li>`;
});
 */
