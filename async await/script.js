function getResult(rollNo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Result of Student : "+rollNo);
            resolve("Successful" + rollNo)
        },2000);
    })
}

(async function result() {
    await getResult(1);
    await getResult(2);
    await getResult(3);   
})();

