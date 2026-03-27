const URL="https://api.thecatapi.com/v1/images/search";
let img=document.querySelector("#cat");

let catPics = async ()=>{
    console.log("Getting data form Api...!");
    const response = await fetch(URL);
    let data=await response.json();
    img.src=data[0].url;
}

catPics();