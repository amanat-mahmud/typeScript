const myArray:number[] = [1,2,3,4,5,6];

const findMaxMin = (...myArray:number[]):[number,number] =>{
    let max = myArray[0];
    let min = myArray[0];
    for(let myNumber of myArray){
        if(myNumber > max){
            max = myNumber
        }
        if(myNumber < min){
            min = myNumber
        }
    }
    return [max,min]
}

const [maxNum,minNum] = findMaxMin(...myArray)
console.log(`Max ${maxNum}`);
console.log(`Min ${minNum}`);