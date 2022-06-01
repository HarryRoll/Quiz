import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "UltraBook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "IPHONE", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);
prod1.subTotal = Number(prod1.setPrice())*Number(prod1.setTotalBuy());
prod2.subTotal = Number(prod2.setPrice())*Number(prod2.setTotalBuy());
prod3.subTotal = Number(prod3.setPrice())*Number(prod3.setTotalBuy());
prod4.subTotal = Number(prod4.setPrice())*Number(prod4.setTotalBuy());
prod5.subTotal = Number(prod5.setPrice())*Number(prod5.setTotalBuy());

let listCart = [prod1,prod2,prod3,prod4,prod5];

 const totalTagihan = listCart.reduce((sum, el) => sum + el.subTotal, 0)
 console.log(`Total Tagihan =${totalTagihan}`);//Total Tagihan =647000000


const totalTagihanDiscount = (discount) => {
     return(totalTagihan-(totalTagihan*(discount/100)));
}

console.log(`Total Tagihan discount=${totalTagihanDiscount(10)}`);//Total Tagihan discount=58580000
