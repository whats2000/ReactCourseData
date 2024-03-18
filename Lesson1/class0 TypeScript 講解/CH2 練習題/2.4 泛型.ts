// 使用泛型寫一個`wrapInArray`函數，它接受任意類型的參數並將其放入一個數組中返回。

// Your code here
const wrapInArray = ___(input: _): _[] => {
  return [input];
}
// End of your code

let result: any[] = wrapInArray(10);

console.log(result); // [10]

result = wrapInArray('hello');

console.log(result); // ['hello']