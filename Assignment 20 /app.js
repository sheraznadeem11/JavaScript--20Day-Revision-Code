let button=document.querySelector("button");
let div=document.querySelector("div");
let h1=document.querySelector("h1");
        // button
button.onclick=(event)=>{
 console.log(event.target);
 console.log(event.type);
 console.log(event.clientX, event.clienty);
}

        // div
div.onmouseover=(eve)=>{
    console.log("this is java script");
 console.log(eve.target);
 console.log(eve.type);
 console.log(eve.clientX, eve.clienty);
}




