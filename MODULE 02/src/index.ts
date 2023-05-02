// const course:string = "Next level Course!"
// console.log(course)
// const person:[number,string] = [55,"Amanat"]
// console.log(person)

// const user: {
//     name:string;
//     age:number;
//     // literal type
//     worksAt: "Google",
//     //optional attribute
//     isMarried?:boolean;
// } = {
//     name: "Amanat",
//     age:23,
//     worksAt: "Google",
  
// }
// console.log(user)
//num1 and num2 will be added and return a number type
// const addArrow = (num1:number,num2:number):number => num1+num2

type FrndType = {
    name:string;
    age:number;
    isMarried:boolean;
}
const frnd1: FrndType = {
    name:"Amanat",
    age: 23,
    isMarried: false
}
const frnd2: FrndType = {
    name:"Mahmud",
    age: 22,
    isMarried: true
}
const userInput = null
// const userInput = undefined
// const storedDate = userInput || 'Default';
// const userData = userInput ?? "Default"
// console.log("With ||",storedDate);
// console.log("With ??",userData);
function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  
  
  const addTwo = generateAdder(2);
  console.log(addTwo(3));
  console.log(addTwo(5));
