// DOM Manipulation

// Assignment #01

// let h1=document.createElement("h1");
// h1.innerText="Java Script";
// document.querySelector("body").append(h1);
// h1.style.color="blue";
// h1.style.fontSize="40px";
// h1.style.fontStyle="italic";


        // Qustion Number 2

let para1=document.createElement("p");
let para2=document.createElement("p");
let para3=document.createElement("p");


para1.innerText="Full Stack Web Development course";
para2.innerText="with Shahid Naeem";
para3.innerText="in Urdu Language";

document.querySelector("body").prepend(para1);
document.querySelector("body").append(para2);
document.querySelector("body").append(para3);

let para=document.querySelectorAll("p");
let newText="";
for(text of para){
    newText += text.innerText + "";
}
let newpara=document.createElement("p");
newpara.innerText=newText;
document.querySelector("body").append(newpara);
newpara.style.color="green";