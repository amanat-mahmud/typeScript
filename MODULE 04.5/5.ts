const numberArray:number[] = [1,2,3,4,5,6];
let sum = 0;
numberArray.map(number=>{
    if(number%2==0){
        sum+=number;
    }
})
console.log(sum);