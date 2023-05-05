type PersonType = {
    name:string;
    age:number;
    address:string;
};

type newType = "name" | 'age' | 'address';

type newKeyofType = keyof PersonType;

const a:newType = 'address';
const b:newKeyofType = 'age';
//used keyof to get value of a object property
function getProperty<X,Y extends keyof X>(obj:X,key:Y){
    console.log(key,obj[key]);
}
getProperty({name:"Amanat",age:20},'age')