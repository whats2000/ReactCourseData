var n = "John Doe";
var age = 30;
var greet = function (name, age) {
    return "Hello, my name is ".concat(name, " and I am ").concat(age, " years old.");
};
console.log(greet(n, age)); // Hello, my name is John Doe and I am 30 years old.
