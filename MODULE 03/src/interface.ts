//interface is only for object type
//function and array are also special type of obj

type UserType = {
    name:string;
    age:number;
}

interface IUser {
    name:string;
    age:number;
}

type ExtendedUserType = UserType & {
    role:string;
}

interface IExtendedUser extends IUser {
    role:string;
}

const user1: UserType = {
    name:"Amanat",
    age:20
}

const user2:IUser ={
    name:"Amanat",
    age:20
}

const user1Extended:ExtendedUserType = {
    name:"Amanat",
    age:20,
    role:'student'
}

const user2Extended:IExtendedUser ={
    name:"Amanat",
    age:20,
    role:"student"
}

// function signature using type aliasing
// func signature example below commented code
// const addNum =(n1:number,n2:number):number => n1+n2
type addNumType = (num1:number,num2:number)=>number
const addNum: addNumType =(n1,n2) => n1+n2
//same thing using interface
interface IAddNumType{
    (num1:number,num2:number):number
}
const IAddNum: IAddNumType =(n1,n2) => n1+n2

type rollNumType = {
//index is of type number and the array holds number type val
    [index:number]:number;
}
const rollNumber:rollNumType = [1,2,345,55,676]