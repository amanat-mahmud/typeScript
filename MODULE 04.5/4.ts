type product = {name:string,price:number,quantity:number};
const myProducts: product[] = [
    {
        name:"NVIDIA rtx 4090",
        price:350000,
        quantity:5
    },
    {
        name:"NVIDIA rtx 3090",
        price:35000,
        quantity:2
    },
    {
        name:"NVIDIA rtx 2090",
        price:3000,
        quantity:3
    },
]

const addPrice = (products:product[]):number =>{
    let totalPrice = 0;
    products.map(product=>{
        totalPrice += product.price;
    })
    return totalPrice
}

console.log(addPrice(myProducts))