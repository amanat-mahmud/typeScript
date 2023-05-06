// interface IProduct{
//     id:number;
//     name:string;
//     price:number;
//     category:string;
// }

// function filterProduct<T extends IProduct, U extends string>(products:T[],criteria:U) :IProduct[] {
//     // let filteredArray:IProduct[]; 
//     // console.log(Products);
//     let filteredArray:IProduct[] = [];
//     // })
//     // console.log(filteredArray);
//     // console.log(criteria);
//     console.log(criteria.split(' '));
//     console.log(parseInt(criteria[2]));
//     if(criteria[0]==="id"){
//         if(criteria[1]==="greater"){
//             filteredArray = products.filter(product=>{
//                 console.log("Test",parseInt(criteria[2]));
//                     return product.id > parseInt(criteria[2]);
//                 })
//         }
//         else if(criteria[1]==="greaterEqual"){}
//         else if(criteria[1]==="less"){}
//         else if(criteria[1]==="lessEqual"){}
//         else if(criteria[1]==="equal"){}   
//         else if(criteria[1]==="notEqual"){}   
//     }
//     else if(criteria[0]==="name"){
//         if(criteria[1]==="equal"){}   
//         else if(criteria[1]==="notEqual"){}   
//     }
//     else if(criteria[0]==="category"){
//         if(criteria[1]==="equal"){}   
//         else if(criteria[1]==="notEqual"){} 
//     }
//     else if(criteria[0]==="price"){
//         if(criteria[1]==="greater"){}
//         else if(criteria[1]==="greaterEqual"){}
//         else if(criteria[1]==="less"){}
//         else if(criteria[1]==="lessEqual"){}
//         else if(criteria[1]==="equal"){}   
//         else if(criteria[1]==="notEqual"){}
//     }
//     return filteredArray;
// }

// const products:IProduct[] = [
//     {
//         id:1,
//         name:"Acer aspire 4752g",
//         price:250000,
//         category:"Laptop"
//     },
//     {
//         id:2,
//         name:"Iphone 14 pro max",
//         price:150000,
//         category:"Mobile"
//     },
//     {
//         id:3,
//         name:"NVIDIA rtx 4090",
//         price:350000,
//         category:"GPU"
//     },
// ]
// const criteria = "id greater 1";
// console.log(filterProduct(products,criteria))


// With the help of chatgpt
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  function filterProducts<T extends keyof Product>(
    products: Product[],
    criterion: T,
    value: Product[T]
  ): Product[] {
    return products.filter((product) => product[criterion] === value);
  }
  const products: Product[] = [
    { id: 1, name: "Apple", price: 1.99, category: "fruit" },
    { id: 2, name: "Banana", price: 0.99, category: "fruit" },
    { id: 3, name: "Carrot", price: 0.49, category: "vegetable" },
    { id: 4, name: "Spinach", price: 2.99, category: "vegetable" },
  ];
  
  const filteredProducts = filterProducts(products, "category", "fruit");
  console.log(filteredProducts);
  // Output: [{ id: 1, name: "Apple", price: 1.99, category: "fruit" }, { id: 2, name: "Banana", price: 0.99, category: "fruit" }]
    