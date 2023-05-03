const arrayOfNumbers = [1,2,3,4,5]
const arrayOfString = arrayOfNumbers.map(num=>num.toString());
console.log(arrayOfString);

type AreaType = {
    height:number;
    width:number;
}

type A = AreaType['height'];//look up type
type B = keyof A // 'height' | 'width'

type Area = {
    //uporer map er kaj ta kore hoise
    [key in keyof AreaType]:string;
}