// function myFunction(a,b){
// if(a===b){ //Becasue === checks both value and datatypes 
// console.log("true");
// }
// else{
//     console.log("False");
// }
// }
// myFunction(1,'1');



// a={a:1,b:2};
// b='b'//For checking the output i given directly in variables instead function 
// if ('b' in Object.keys(a)){
//      console.log("true");
//     }
// else{
//     console.log("false");
// }

// arrobj={}

const obj={
    name:'kural',
    age:'21',
    intro:function(){
      console.log("Hi i am ",this.name," My age is ",this.age);
    },
    
}
function kural(){
console.log("check check");
}
function moni(name,age){
this.name=name;
this.age=age;
this.kural=kural;
}
const obj1=new moni('moni',21);
console.log(obj1.kural());