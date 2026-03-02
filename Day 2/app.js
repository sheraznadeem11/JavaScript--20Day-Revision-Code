let num1 =10;
let num2 =5;
let result =0;
let operator =prompt("enter operator: ");
switch( operator){
 case "+":
 result=num1+num2;
 break;
  case "-":
 result=num1-num2;
 break;
 case "*":
 result=num1*num2;
 break;
 case "/":
 result=num1/num2
 break;
 default:``
 alert("Invalid input")
}
if(result !=0)
    console.log(num1,operator,num2,"=",result);
