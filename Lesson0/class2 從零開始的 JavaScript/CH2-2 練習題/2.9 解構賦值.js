// 1. 給定一個對象`{firstName: 'James', lastName: 'Bond', country: 'UK'}`，使用對象解構賦值來提取`firstName`和`country`。
const person = {
    firstName: 'James',
    lastName: 'Bond',
    country: 'UK'
};

// You code here
const _firstName, country_ = person;
// End of your code

console.log(firstName, country);

// 2. 給定一個數組`[100, 200, 300, 400, 500]`，使用數組解構賦值來提取第一個和第三個元素。
const numbers = [100, 200, 300, 400, 500];

// You code here
const ... = numbers;
// End of your code

console.log(first, third);