function getResult(rollNo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("Result Show :"+rollNo);
            reject("");
        },4000)
    })
}

let student1=getResult(124);
student1.then((res)=>{
    console.log("Data is found",res);
});
student1.catch((err)=>{
    console.log("Data is Notfound",err);
})