console.log("Prime Numbers !!");

let num = parseInt(window.prompt("Enter the limit number :"));
/* let ary=[];

for (let i = 2; i < num; i++) {
    
    for(let j=2 ; j<i ;j++)
    {
        if(i % j != 0)
        ary.push(i);
        break;
    }
    
}
 */

function toprime(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}
console.log(toprime(num));