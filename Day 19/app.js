let body=document.querySelector("body");
let br=document.querySelector("#red");
let bb=document.querySelector("#blue");
let bd=document.querySelector("#black");
let bo=document.querySelector("#orange");
let bg=document.querySelector("#gray");
let bp=document.querySelector("#purple");
let by=document.querySelector("#yellow");



br.onclick=()=>{
    body.style.backgroundColor="red";
}
bb.onclick=()=>{
    body.style.backgroundColor="blue"
}
bd.onclick=()=>{
    body.style.backgroundColor="black"
}
bo.onclick=()=>{
    body.style.backgroundColor="orange"
};
bg.onclick=()=>{
    body.style.backgroundColor="gray"
}
bp.onclick=()=>{
    body.style.backgroundColor="purple"
}
by.onclick=()=>{
    body.style.backgroundColor="yellow"
}
