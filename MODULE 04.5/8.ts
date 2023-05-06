const myColors = (color:"red"| "green" |"blue", upperCase?:boolean) =>{
    if(upperCase){
        console.log(color.toUpperCase());
    }
    else{
        console.log(color.toLowerCase());
    }
}
myColors("red", true); 
myColors("green"); 