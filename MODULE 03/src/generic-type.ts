// const NewRollNumber:number[] = [1,2,4]
//same as the upper one
const NewRollNumber:Array<number> = [1,2,4]

const userRoll: Array<{name:string,roll:number}> =[
    {
        name:"Mr.X",
        roll:1
    },
    {
        name:"Mr.Y",
        roll:2
    }
]

type GenericArray<T> = Array<T>;
const rollNum: GenericArray<number> = [1,2,3,4];
const rollStr: GenericArray<string> = ['1','2','3','4'];

//don't need to do this anymore as Array is generalized
// const rollNum: Array<number> = [1,2,3,4];
// const rollStr: Array<string> = ['1','2','3','4'];

type GenericTuple<T,U> = [T,U];
const relation:GenericTuple<string,string> = ["Mr.X","Ms.Y"]
interface CrushInterFace<T>{
    name:string,
    husband:T
}

const crush1: CrushInterFace<string> = {
    name:"Mrs.X",
    husband:"Mr.x"
}
// interface CrushInterFace2<T, U>
//const crush2: CrushInterFace<string,null>
interface CrushInterFace2<T, U=null>{
    name:string;
    husband:T;
    salary?:U;
}

const crush2: CrushInterFace<string> = {
    name:"Mrs.X",
    husband:"Mr.x",
}
const crush3: CrushInterFace2<string,number> = {
    name:"Mrs.X",
    husband:"Mr.x",
    salary:1000,
}