//Object Implementation
let spiderman={
    name:"Peter Parker",
    age:21,
    "super-power":["Web shooting and climb walls"],
    isAlive:true,
    address:{
        city:"Newyork",
        state:"California"
    },
    avengerIntro:function(){
        let intro="Hi i am "+this.name+ " am a Avenger with "+this.superpower+" skills";
        console.log(intro);
    }
} 
    spiderman.avengerIntro();
console.log(spiderman["super-power"]);

function intro(){
    console.log(this.name)
}
function obj (name,age){
    this.name=name
    this.age=age
    this.intro=intro
}
const obs=new obj('Kural',22)
obs.intro()
console.log(obs);

// Factory functions

function create(name){
    return{
    name,
    greet(){
     console.log("Hi i am "+name);
    }};
}
let kural=create('kural');
let moni=create('moni');
console.log(kural.greet());
console.log(moni.greet());


let object={
    name:'kural',
    getName(){
        console.log("My name is "+this.name);
    }
};
//Will get all obj members and give it as array
for(let i of Object.keys(object)){
    console.log(object[i]);
}
//Entries Suppose if we need both key and values
for(let i of Object.entries(object)){
    console.log(object);
}
//Conditional statement to check a obj member availability
if('name' in object){
    console.log("Yes! name is available in Object ")
}
   
// Cloning a js object
object2={
    ...object
    //spread operator
};
console.log("Object 2 ",object2);
console.log("--------------------------------");
object3= Object.assign({},object2)
console.log("Object 3 ",object3);

function alarm(person,delay){
    return new Promise((resolve,reject)=>{
        if(delay<0){
            throw new  Error('Alarm delay must be positive ')
        }
        setTimeout(()=>{
          resolve('wake up'+person);
          console.log(person,"wake up");
        },delay);
    });
}
alarm('kural',4000);