//Inheritance
class Parent{
    constructor(email){
        this.email=email;
    }
    alive=true;
    
    ParentFuntion(){
        console.log("i am from parent");
    }
}
class child1 extends Parent{
    
}

let child=new child1();
//Inherited parent method
console.log(child.ParentFuntion());

//Constructer
let parent=new Parent("child@gmail.com")
console.log(parent);
