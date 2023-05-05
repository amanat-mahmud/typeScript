// const makePromise = (): Promise<string> =>{
//     return new Promise<string>((resolve,reject)=>{
//         const data:string = "Data fetched"
//         if(data){
//             resolve(data);
//         }
//         else{
//             reject("Failed to fetch");
//         }
//     })
// }

// const getPromise = async():Promise<string> =>{
// const result = await makePromise();
// return result;
// }

interface ITodo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async():Promise<ITodo> =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}
//void as it is not returning anything
const getTodoData = async():Promise<void> =>{
    const result = await getTodo();
    console.log(result)
}
getTodoData();