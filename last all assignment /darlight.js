let dark=document.querySelector("button");
let body=document.querySelector("body");


let col="dark";

let change=()=>{
if(col==="dark"){
    body.style.backgroundColor="white";
    col="light";
    dark.innerText="Dark";
}else{
    body.style.backgroundColor="black";
    col="dark";
    dark.innerText="Light";
}
};

dark.addEventListener("click",change);