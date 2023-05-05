function addArray(arr1:number[],arr2:number[]):number[]{
    let outerLoop:number = 0; 
    let innerLoop:number = 0; 
    let arr3:number[] = [0];
    console.log(arr1);
    console.log(arr2);
    if(arr1.length > arr2.length){
        outerLoop = arr1.length;
        innerLoop = arr2.length;
    }
    else{
        outerLoop = arr2.length;
        innerLoop = arr1.length;
    }
    arr3.pop()
    for (let i = 0; i < outerLoop; i++) {
        for (let j = 0; j < innerLoop; j++) {
            if(arr1[i]===arr2[j]){
                arr3.push(arr1[i]);
            }
        } 
    }
    return arr3;
}

console.log(addArray([1,2,3,4,5],[0]))
