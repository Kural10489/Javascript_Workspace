//Json
var json={
    name:"kural",
    age:22
};
var stringJson=JSON.stringify(json);// converting json-String
console.log(stringJson);
console.log(JSON.parse(stringJson).name); //onverting String to json
