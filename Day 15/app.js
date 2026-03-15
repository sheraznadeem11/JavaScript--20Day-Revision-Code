//Print big number use function or if else //
// function value(num1,num2){
//     if(num1 >num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }
// let bignum=value(15,12);
// console.log(bignum);

//Print small number 
//  function small(num1,num2){
//     if(num1<num2){
//         return num1;
//     }else{
//         return num2;
//     }
//  }
//  let smallnum=small(5,10);
//  console.log(smallnum);


// Assignment number 2
// function oddNumber(x){
//     return x %2 === 0;
// }
// let odNUm=oddNumber(23);
// console.log("Is Number Even: ",odNUm);



// for Each
// let color=['Green','orange','blue','gray','pink'];
// color.forEach((item)=>{
//     console.log(item);
// });
    // print item index Array
// color.forEach((item,index,array)=>{
//     console.log(`Print Color Value : ${item.toUpperCase()} :${index} ${array}`)
// })


// print NUmber 
// let num=[1,3,4,5,6,7];
// num.forEach((x)=>{
//     console.log(x+x);
// });

//  for each multiplay
// let num=[1,3,4,5,6,7];
// num.forEach((x)=>{
//     console.log(x*x);
// });



//        ASSIGNMENT SOLVE //
    // Question 1 Solve
// let number=[2,4,5,6,7,8,9];
// function square(x){
//     return x * x;
// }
// for( i=0; i<number.length; i++)
// console.log(`square of ${number[i]} or ${square(number[i])}`);


// Quesion 2 Solve
// let number=[2,4,5,6,7,8,9];
// number.forEach(function(item){
//     console.log(item * item)
// })

// Question 2 solve
// let number=[2,4,5,6,7,8,9];
// number.forEach((item)=>{
//     console.log("arrow funtion",item * item)
// })

// Extra use solve quesion 

// let number=[2,4,5,6,7,8,9];
// number.forEach((item,index,array)=>{
//     console.log(`Arrow function use ${item *item}or${index} :or: ${array}`)
// })


        // Map()
let num=[2,3,4,6,8,9,11];
num.map(val=>{
    console.log(`square of ${val} : or ${val *val}`)
})
