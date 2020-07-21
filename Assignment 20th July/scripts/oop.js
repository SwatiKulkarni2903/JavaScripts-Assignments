console.log("OOPs Concepts !!");

class User
{
    constructor(name, age, email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.courses=[];
    }
    login()
    {
        console.log(`${this.name} has logged in :)`);
    }
    logout()
    {
        console.log(`${this.name} has logged out :)`);
    }
}

let user1 = new User('Swati',21,'swati@gmail.com');
user1.login();

class Moderator extends User
{
    constructor()
    {
        super();
        this.coins=0;
    }
    AddCoins(user)
    {
        this.coins++;
        console.log(`${user.name} has ${this.coins} coins.`);
    }
    RemoveCoins(user)
    {
        this.coins--;
        console.log(`${user.name} has ${this.coins} coins.`);
    }

}

let user2=new Moderator('kulkarni',21,'kulkarni@gmail.com',10);
user2.AddCoins(user1);
user2.AddCoins(user1);
user2.AddCoins(user1);
user2.RemoveCoins(user1);

class Admin extends Moderator
{
    AddCourses(x,course)
    {
        console.log(course);
        //user.courses.push(course);
        //console.log(x.courses);
        x.courses.push(course);
        //console.log(x.courses);
        console.log(x);
    }
    RemoveCourse(x,course)
    {
        x.courses = x.courses.filter(el => {
            return el != course;
        }
        )
        console.log(x.courses);
    }
}

let adm = new Admin('Sonu',17,'sonu@gmail.com');
adm.AddCourses(user1,'JavaScript');
adm.AddCourses(user1,'Python');
adm.RemoveCourse(user1,'Python');

console.log(user1)

