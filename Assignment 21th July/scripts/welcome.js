console.log("Welcome User !!");

const x = document.getElementById('clock');

function clock()
{
    let today = new Date();
    let y = today.toLocaleTimeString();

    x.innerText=y;

}

//clock();

setInterval(clock,1000);

const user = document.getElementById('user');

const myname = window.prompt("Enter ur name :");

user.style.color='tomato';
user.innerText=`Welcome ${myname}, In the world of JavaScript !!`;