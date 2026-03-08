let pakyear =1947;
let year=0;
while (year != pakyear){
 let  year=prompt("Enter in which year pakistan came into being");
if (year == pakyear){
    console.log("Correct Answer !"  );
        break;
  
}else if( year > pakyear){
    alert("Large value ! Try again");
}else {
 alert("Small Value ! Try again");
}
}
console.log("Thanks for using this program !");

