//Array Object
const Employee=[{name:'kural', role:'Angulardev'},
          {name:'Person2',role:'Reactdev'}];


          
//Functions to check then method
const firstCheckingFunction=()=>{
  console.log('Check 1');
}
const secoundCheckingFunction=()=>{
  setTimeout(console.log('Check 2'),2000);
}


// Function Written to fetch data from the array of objects and potray in HTML
const getEmployeedetails=()=>{
  let output="";
  setTimeout(()=>{
Employee.forEach((item)=>{
output=output+`<li>${item.name}</li>`;
document.body.innerHTML=output;
})
  },1000);
}

//Setting up a new object and calling it in then method as asyncronous flow
const setEmployeedetails=(employee)=>{
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    Employee.push(employee);
    const error=false;
    if(!error){
      resolve();
 }
 else{
  reject('Error: somthing wrong!');
 }
},2000);
});
}
setEmployeedetails({name:"tyson",role:"webdev"}).then(getEmployeedetails).catch(console.log(Error)).then(firstCheckingFunction).then(secoundCheckingFunction);

// Async Await
async function Async(){
  await secoundCheckingFunction(); //Waits for this function to complete
firstCheckingFunction();
}
Async();