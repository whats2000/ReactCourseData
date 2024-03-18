// 2.7 箭頭函數
let add = number => number * number;

// 使用箭頭函數重寫array.map
let numbers = [1, 2, 3, 4];
let squares = numbers.map(add);

console.log(squares); // [1, 4, 9, 16]

// 1. 將一個函數表達式轉換為箭頭函數。
function subtractA(a, b) {
  return a - b;
}

// Your code here
let subtractB = (a, b) __ { return a - b; };

// 如果函數體只有一行，可以省略大括號和return關鍵字
let subtractC = (a, b) __ a - b;
// End your code

console.log(subtractA(5, 3)); // 2
console.log(subtractB(5, 3)); // 2
console.log(subtractC(5, 3)); // 2

// 2. 比較箭頭函數和普通函數的`this`關鍵字綁定行為。
let person = {
    name: 'John',
    test: function() {
        console.log(this);
    }
};

person.test(); // { name: 'John', test: [Function: test] }

let person2 = {
    name: 'John',
    test: () => {
        console.log(this);
    }
};

person2.test(); // undefined