//if else condation//

//   let empName="Sheraz Nadeem";
//   let salary=20000;
//   let tax=0;
//   let netSalary=0;
//   if(salary > 30000){
//     tax=10/100*salary;
//   }
//   else
//   {
//     tax=5/100*salary;
//   }
// console.log("Employee Name",empName);
// console.log("Employee Salary", salary );
// console.log("Tax on Salary", tax);
// netSalary=salary-tax
// console.log("Net Salary :", netSalary);

//if or else if //
//let salary=prompt("Enter salary ");;
// let tax;
// let taxRate;

// if(salary >= 0 && salary < 10000){

//   tax=5/100*salary;
//   taxRate="5%";
// }
// else if (salary >=10000 && salary<100000){
//  tax =10/100*salary;
//  taxRate="10%";
// }
// else if (salary>=100000){
// tax=20/100*salary;
// taxRate="20%";
// };
// console.log("Salary",salary);
// console.log("Tax",taxRate,":",tax);
// console.log("Net Salary", salary-tax);


let studentName=prompt("Enter Studen name");
let max=prompt("Enter Marks");
let grade;
if(max >=90 && max< 100)
{
  grade="Grade A";
  
}
else if(max >=80 && max<89)
{
 grade="Grade B";
}
else if(max>=70 && max<79)
{
  grade="Grade C";
}
else if (max>=60 && max<69)
{
  grade="Grade D";
}
else if(max>= 50 && max<59)
{
  grade="Grade E";
}
else if(max >=0 && max <49)
{
  grade="Fail";
}
console.log("Student Name :",studentName);
console.log("Marks :",max );
console.log("Grade : ",grade);