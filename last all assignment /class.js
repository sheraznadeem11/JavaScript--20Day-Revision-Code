class employee{
    constructor(fullname,salary,position){
        console.log("New Employee Created !");
        this.fullname=fullname;
        this.salary=salary;
        this.position=position
    }

    detail(){
        console.log(`Employee Name: ${this.fullname} and Salary ${this.salary} and he is :${this.position}`);

    }
}

let emp1= new employee("Sheraz Nadeem",1500000,"CEO_Manager");
let emp2 = new employee("Monsaf ali",500000,"CEO");
let emp3 = new employee("Ali",550000,"HR");
let emp4 = new employee("Bilal",200000,"HR-Manager");
console.log(emp1,emp2,emp3,emp4);