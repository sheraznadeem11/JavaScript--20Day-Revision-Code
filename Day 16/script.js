const People=[
    {name:"Sheraz",age:20},
    {name:"Monsaf",age:26},
    {name:"Ali",age:30}
];
const allPeople=People.map(val=>{
    return val.name;
});
console.log(People);
console.log(allPeople);