let nam=prompt("Enter Name");
let password=nam.slice(0,3)+"#@$"+nam.length;
console.log(nam);
console.log("Generated auto passowrd : ",password);