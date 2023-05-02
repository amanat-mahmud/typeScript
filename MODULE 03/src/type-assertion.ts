let emni: any;

emni = "Next level course";
// assign a type so that typescript can know it's
// not any type 
//use this syntax 
(emni as string).toLocaleUpperCase();
//another way of type assertion
<string>emni.toLocaleUpperCase();

function converted(value: number|string):number|string|undefined{
    if(typeof value == 'string'){
        return `The converter value is ${parseFloat(value)*1000}`
    }
    else if(typeof value == 'number'){
        return `The converter value is ${(value)*1000}`
    }
}

const numberCOnverted = converted(1045) as number;
const stringCOnverted = converted('1045') as string;

type ErrorType= {
    message:string;
}
console.log("running test")
try{}
catch(err){
    console.log((err as ErrorType).message)
}