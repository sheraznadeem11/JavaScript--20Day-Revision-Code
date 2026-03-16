//  filter  question 1
// const animal=["do","cat","bear","Wolf"];
// const animalName=animal.filter(text=>{
//     return text.length ==3
// });
// console.log(animalName);

// question 2
// const number=[1,3,2,4,5,6,8,9,10,20,45,50,55,90,];
// const num=number.filter(val=>{
//     return val %2 ===0;
// });
// console.log(num);


//   Reduce Method 
// let number=[10,20,25,5,12,40,50];
// let num=number.reduce((oldValue,newValue) => {
//  return oldValue+newValue;
// });
// console.log(number);
// console.log("Value Sum",num);


// Reduct quesion 2

let number=[10,20,25,12,40,50,100];
let max=number.reduce((oldValue,newValue) => {
 return newValue>oldValue?  newValue:oldValue;
});
console.log(max);
