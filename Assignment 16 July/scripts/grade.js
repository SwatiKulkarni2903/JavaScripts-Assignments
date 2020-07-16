console.log("Student grades !!");

let marks = window.prompt('Enter the marks of student :');
if(marks >=80)
{
    console.log(`Marks are ${marks} and grade is A.`);
}
else if(marks >= 60 && marks < 80)
{
    console.log(`Marks are ${marks} and grade is B.`);
}
else if(marks >= 40 && marks < 60)
{
    console.log(`Marks are ${marks} and grade is C.`);
}
else
{
    console.log(`Marks are ${marks} and grade is D.`);
}


console.log("Using ternary operator :-");

let ternary = (marks >= 80) ? console.log(`Marks are ${marks} and grade is A.`) : (marks >= 60 && marks < 80 ) ? console.log(`Marks are ${marks} and grade is B.`): (marks >= 40 && marks < 60 ) ? console.log(`Marks are ${marks} and grade is c.`) : console.log(`Marks are ${marks} and grade is D.`);

/* console.log("Using switch case :-")

switch(marks)
{
    // console.log("";)
    case marks >= 80:
        console.log("hello");
        console.log(`Marks are ${marks} and grade is A.`);
        break;
    case (marks >= 60 && marks < 80):
        console.log(`Marks are ${marks} and grade is A.`);
        break;
    case (marks >= 40 && marks < 60):
        console.log(`Marks are ${marks} and grade is A.`);
        break;
    default:
        
} */
