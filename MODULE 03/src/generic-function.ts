const createArray1 = (param:string):string[] =>{
    console.log([param]);
    return [param];
}
const createArray2 = <T>(param:T):T[] =>{
    console.log([param]);
    return [param];
}

function createArray3<T>(param:T):T[]{
    return [param];
} 

const resultArray1 = createArray1("Bangladesh")

const resultArray2 = createArray2<string>("Dhaka")