//Array Object
const Employee=[{name:'kural', role:'Angulardev'},
          {name:'Person2',role:'Reactdev'}]


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

//Setting up a new object and calling a callback method as asyncronously 
const setEmployeedetails=(employee,callback)=>{
  setTimeout(()=>{
  Employee.push(employee);
  callback();
  },2000);
}
setEmployeedetails({name:"Person3",role:"webdev"},getEmployeedetails);

