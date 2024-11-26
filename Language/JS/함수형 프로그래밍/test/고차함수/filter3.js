const users = [
    { name: "John", age: 25, gender: "male" },
    { name: "Doe", age: 31, gender: "female" },
    { name: "Kim", age: 20, gender: "female" },
    { name: "Liam", age: 40, gender: "male" },
];

const olderThen30 = user => user.age >= 30;
const isFemale = user => user.gender === "female";

console.log(
    users.filter(olderThen30).filter(isFemale)
); // [ { name: "Doe", age: 31, gender: "female" } ]