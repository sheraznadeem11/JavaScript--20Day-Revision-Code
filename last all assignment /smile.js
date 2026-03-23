let image=document.querySelector("#image");
image.addEventListener("mouseover",()=>{
    image.src="smile.png";
});

image.addEventListener("mouseout",()=>{
    image.src="sad.png";
})