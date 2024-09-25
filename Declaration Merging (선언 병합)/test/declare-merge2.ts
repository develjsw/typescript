class Animal {}

class Sheep {}

class Doc {}

class Cat {}

interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Doc): Doc;
    clone(animal: Cat): Cat;
}

// 병합된 결과
// interface Cloner {
//     clone(animal: Animal): Animal;
//     clone(animal: Sheep): Sheep;
//     clone(animal: Doc): Doc;
//     clone(animal: Cat): Cat;
// }

const cloner: Cloner = {
    clone(animal: Animal): Animal {
        return animal;
    }
};

console.log(cloner);