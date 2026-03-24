let name = "Sheraz Nadeem";
let age = 21;
let totalMarks=1190;
let obtMarks = 405;

console.log("Student Name : ",name);
console.log("Student Age : ",age);


try{
    console.log("Total Marks:",totalMarks)
}catch(erro){
    console.log(erro)
}

console.log("ObtMarks",obtMarks);
let per=obtMarks/totalMarks*100;
console.log("Percentage is : ", per, "%");