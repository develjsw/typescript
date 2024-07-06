type Person = {
    name: string;
    age: number;
    alive: boolean
}

type FootSize = Person["name" | "age"];    // Person type의 name과 age 타입인 string, number 타입을 참조 → union type(string | number)

const footSize1: FootSize = "225mm";
const footSize2: FootSize = 225;

console.log(footSize1);
console.log(footSize2);

type UnionKeys = "name" | "age";
type Height = Person[UnionKeys];     // Person type의 name과 age 타입인 string, number 타입을 참조 → union type(string | number)

const height1: Height = "175cm";
const height2: Height = 175;

console.log(height1);
console.log(height2);

