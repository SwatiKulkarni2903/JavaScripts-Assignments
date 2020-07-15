console.log("Hello !!");

let ary = ['first' , 'second' , 'third' , 'fourth' ];
console.log(ary);


//pushing elements into array
ary.push('fifth');
console.log(ary);

//poping elements from array
ary.pop();
console.log(ary);

//changing element in array
ary[1] = 'two';
console.log(ary);

//deleting elements in array
delete ary[1];
console.log(ary);

//splicing the elements in array
ary.splice(0,1,'one','second');
console.log(ary);

//use splice to remove elements
ary.splice(2,1);
console.log(ary);

//merging two arrays
let b = ['ten' , 'nine' , 'eight'];
ary = ary.concat(b);
console.log(ary);

//sort and reverse the array
ary.sort();
console.log(ary);
ary.reverse();
console.log(ary);

//include() in string
let str = "Welcome to javascript world !!";
let ans = str.includes('to');
console.log(ans);

//repeat() in string
let res = str.repeat(2);
console.log(res);

//replace() in string
let stri = str.replace('to' , 'to the');
console.log(stri);

//charCodeAt() in string
let num = str.charCodeAt(0);
console.log(num);