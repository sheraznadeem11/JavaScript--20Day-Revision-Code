// let newtext=prompt("Enter New text ");
// let h1=document.querySelector("h1");
// h1.innerText=h1.innerText+newtext;



// color change  attribute access js to html file or tag
//  get or set attribute 
// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","mynewclass"));



// style change use js 

// let heading=document.querySelector("h1");
// heading.style.color="purple";


// let p=document.querySelector("p");
// p.style.fontSize="16px";
// p.style.visibility="hidden"
// let button=document.querySelector("button");
// button.style.background="orange";


 
           //create element 
let create=document.createElement("h2");
create.innerText="This is a new create Element";
document.querySelector("div").append(create);
create.style.color="gray";
create.style.fontSize="20px";

            // remove tag elemet//
let h3=document.querySelector("h3");
h3.remove();


//   create button use create element before/
let button=document.createElement("button");
button.innerText="submit";
document.querySelector("h2").after(button);
button.style.background="green";
button.style.color="white";