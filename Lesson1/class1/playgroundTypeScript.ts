let n = "John Doe";
let age = 30;

const greet = (name: string, age: number): string => {
    return `Hello, my name is ${name} and I am ${age} years old.`;
};

console.log(greet(n, age)); // Hello, my name is John Doe and I am 30 years old.