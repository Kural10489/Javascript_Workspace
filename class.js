class Employee{
    constructor(name,mob,age){
        this.name=name;
        this.mob=mob;
        this.age=age;
    }
}
employee1=new Employee('kural',9080724529,22);
employee2=new Employee('kural',9080724529,23);
employee3=new Employee('kural',9080724529,22);

console.log(employee1.age,employee2.age);