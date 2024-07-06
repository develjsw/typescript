interface Product {
    name: string;
    price: number;
    onSale: boolean;
}

type ProductName = Product["name"];     // Product 인터페이스의 name의 타입인 string 타입을 참조

const product1: ProductName = "A재킷";    // string
const product2: ProductName = "B재킷";    // string
const product3: ProductName = "C청바지";  // string

console.log(product1);
console.log(product2);
console.log(product3);

type ProductPrice = Product["price"];   // Product 인터페이스의 price의 타입인 number 타입을 참조

const product4: ProductPrice = 34500;   // number
const product5: ProductPrice = 119500;  // number

console.log(product4);
console.log(product5);