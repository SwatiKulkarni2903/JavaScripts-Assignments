console.log("Destructuring the object !!");

const student = {

    name:"Helsinki",
    age:24,
    projects:{
        dicegame:"Two player dice game using js"
    }
}

const {name , age , projects:{dicegame}} = student;
console.log(name,age,dicegame);