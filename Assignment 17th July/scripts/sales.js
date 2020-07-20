console.log("Sales Department !!");


let objprice = 10;
let sale = parseInt(window.prompt("Enter the sale :"));

let totalprice = sale*objprice;
let commission =0;

if(sale>=0 && sale<=5000)
{
    commission = (totalprice*2)/100;
}
else if(sale>=5001 && sale<=10000)
{
    commission = (totalprice*5)/100;
}
else if(sale>=10001 && sale<=20000)
{
    commission = (totalprice*7)/100;
}
else if(sale>=20000)
{
    commission = (totalprice*10)/100;
}

console.log("Commission Earened : "+commission+" Rs.");