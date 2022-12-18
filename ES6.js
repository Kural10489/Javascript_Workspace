// Extend Parameter Handling

//Default parameter values and optional parameters
let greet=(msg='hi',name='kural')=>{ //Default parameter 
console.log(msg,name);
}
greet(); //optional parameters

//Scoping
{let i=10} //{ this is the scope of i } we cannot access i outsite like here
function scoping(){
    let i=0 //This is local scope value of i is 0 only inside the function
}
var i=0;//This is global scope value of i is 0 globally




//The scope of this keyword  will be global inside the arrow funcntion (lexical) instead localized 
var age=21;
const lexicalThis=()=>console.log(this.age);

lexicalThis();
var person={
    age:20,
    lexicalThis:function (){
        console.log(this.age);
    lexicalThis2=()=>{
        console.log(this.age);
        lexicalThis3=()=>{
            console.log(this.age);
        }
    }
    lexicalThis2();
    lexicalThis3();
    }
    
};
person.lexicalThis();

//Rest Operator
const InHandSalary=(pf,...salary)=>{
    const total=salary.reduce((a,b)=> a+b);
    console.log(`
    Your Total Salary : ${total}
    Your PF : ${pf}
    Your In-Hand Salary : ${total-pf}`);
 

    
}
console.log(InHandSalary(3000,10,23,34423,100)); 

//Template Literals
console.log("a\Dc"); //This will skips the escape chars
console.log(String.raw`a\Dc`) //This will print the exact same string



//Enhanched Obj Properties
const user={
    es5Function:function(){

    },
    //Insted we can directly define like this
    es6Function(){

    }
}

//Getter Setters
const person={
    fname:'kuralanban',
    lname:'karthikeyan',
    get fullname(){
      return this.fname+this.lname
  },
    set fullname(val){
      const p=val.split(' ');
      this.fname=p[0];
      this.lname=p[1];
    }
  }
  person.fullname='Abinash Puniyamoorthy';
  console.log(person);