const users = [
    { name: "John", age: 25, gender: "male" },
    { name: "Doe", age: 31, gender: "female" },
    { name: "Kim", age: 20, gender: "female" },
    { name: "Liam", age: 40, gender: "male" },
];

const byProperty = (prop, fn) => {
    return (user) => {
        return user.hasOwnProperty(prop) && fn(user[prop]);
    }
}

console.log(
    users.filter(byProperty("age", user => user >= 30))
); // [ { name: "Doe", age: 31, gender: "female" }, { name: "Liam", age: 40, gender: "male" } ]

console.log(
    users.filter(byProperty("gender", user => user === "female"))
); // [ { name: "Doe", age: 31, gender: "female" }, { name: "Kim", age: 20, gender: "female" } ]