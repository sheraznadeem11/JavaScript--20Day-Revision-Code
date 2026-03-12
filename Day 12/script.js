// let arry=["Bilal","ahmad","iqram"];
// let add=arry.push("ali");
// let add=arry.pop();
// let add=arry.length();
// console.log(add,arry);


//assignment//

// let arry=[2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let sum=0;
// for (let x of arry){
//     console.log(x);
//     sum+=x

// }
// console.log("sum of all values",sum);

//assignment number 2//
// let no=[2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(let i=no.length; i>0 ; i--){
//     console.log(no[i]);
// }

// assignment number 3

let no=[1,2,33,44,5,6,7,8,88,210,887];
let largeNo=no[0];
for(let i=0; i<no.length; i++ )
{
    console.log(no[i]);
    if(no[i]> largeNo){
        largeNo=no[i];
    }
}
console.log("large no is :", largeNo);