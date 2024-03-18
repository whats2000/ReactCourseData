/**
 * 1. 創建一個`Animal`類，該類有一個`name`屬性和一個`makeSound`方法。然後創建一個`Dog`類，該類繼承自`Animal`，並重寫`makeSound`方法以返回`"Woof!"`。
 * 2. 創建一個`Cat`類，該類繼承自`Animal`，並重寫`makeSound`方法以返回`"Meow!"`。
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    makeSound() {
        return '...';
    }
}

_____ Dog _______ Animal {
    makeSound() {
        return 'Woof!';
    }
}

_____ Cat _______ Animal {
    makeSound() {
        return 'Meow!';
    }
}

const dog = ___ Dog('Rex');
const cat = ___ Cat('Fluffy');

console.log(dog.name); // Rex
console.log(dog.makeSound()); // Woof!

console.log(cat.name); // Fluffy
console.log(cat.makeSound()); // Meow!
