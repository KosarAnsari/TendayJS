let stu ={  //an object consists of some properties(key:value) and methods(functions)
    name:"kosar",
    roll_no:8620102,
    age:23,
    marks:80,
    printmarks: function(){
        console.log("marks =" , this.marks);
    },
};

// JS have a special property called prototype,prototype is an object inside an object,we can set prototype using __proto__
let emp = {
    empname:"Rahul",
    empid:101,
    calcTax(){
        console.log("the rate of tax is 10%");
    },
}

let newemp ={
    salary: 50000,
    calcTax(){
        console.log("rate of tax is 20%"); // priority will be given to this function for newemp.
    }
};

newemp.__proto__ = emp;


//Class :- a tempelate for creating objects that have similar behaviour(functions) and state(variables).
class Toyota{

    //constructor :- type of function or method,a reserved keyword, automatically invoked by JS when finds the "new" keyword written inside class.
    constructor(brand,mileage){
        console.log("creating a new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
   // setBrand(brand){
  //      this.brandName =brand;
   // }

}

let fortuner = new Toyota("fortuner",10);//way of creating or writing an object.here constructor will be invoked because new keyword is written here
console.log(fortuner);
let lexus  = new Toyota("lexus",12);//here constructor will be invoked because new keyword is written here.
console.log(lexus);
//fortuner.setBrand("fortuner");

//Inheritance :- passing down properties and methods from parent class to child class.
//if child class and parent class has same method, child's method will be used[Method overriding.]

class parent{
    

    hello(){
        console.log("hello baby! welcome to world");
    }
}
 class child extends parent{}

 let obj = new child();

 class person{

    constructor(name){
        
        this.species = "homo-sapiens";
        this.name = name;
    }

    eat(){
        console.log("eating");
    }

    sleep(){
        console.log("sleeping");
    }

    work(){
        console.log("sitting idle");
    }
 };

 class engineer extends person{

    constructor(name){
       
        super(name);//to invoke parent class constructor
        //this.branch = branch;
        //this.name = name;
       
    }
    work(){
        super.eat();//accessing the method of parent class(person) in child class(engineer)
        console.log(" code,solve problems & build something");
    }
 }

let shradhaobj = new engineer("shradha");

//Practice question

class User{
    constructor(Username,email){
        this.Username = Username;
        this.email = email;
    }

    viewData(){
        console.log("viewing website data");
    }
};

let user1 = new User("Kosar","kosaransari@gmail.com");
let user2 = new User("Shiba","shiba32@gmail.com");

class Admin extends User{
    constructor(name, email){
        super(name,email);
    }
    editData(){
        
        console.log("editing the data");
    }

}

let admin1 = new Admin("admin1","admin@gmail.com");

// Error Handling (try-catch)
 let a = 5;
  let b = 10;
   try{
    console.log ("a+b = " ,a+b);
    console.log ("a+b = " ,a+b);
    console.log ("a+b = " ,a+b);
    console.log ("a+b = " ,a+b);
    console.log ("a+b = " ,a+c);
    console.log("error caught");
    } catch(err){
        console.log(err);
    }
    console.log ("a+b = " ,a+b);
    console.log ("a+b = " ,a+b);