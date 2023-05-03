//can also use interface in here
type MyInfoType = {
    name:string;
    age:number;
    salary:number
}

const addMeInMyCrushMind = <T extends MyInfoType>(myInfo:T)=>{
    const crush = 'Ana de armas';
    const newObj = {...myInfo,crush};
    console.log(newObj);
    return newObj;
}

const myInfo:MyInfoType ={
    name:"Amanat",
    age:20,
    salary:1001
}

const result1 = addMeInMyCrushMind(myInfo)