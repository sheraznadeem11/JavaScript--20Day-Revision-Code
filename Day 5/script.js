//For of For in Concept//

// let empName=prompt("Enter Name");
// let strsize=0;
// for(let x of empName){
//     console.log("letter",x);
//     strsize++;
// }
// console.log("Letter  Length",strsize);

let employ={
    fullName:"Sheraz Nadeem",
    age:20,
    JobStatus:"Developer",
    salary:200000,
}
for(let emp in employ){
    console.log(emp,":",employ[emp]);
}