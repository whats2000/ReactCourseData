# 第2章：TypeScript基礎

## 2.1 基本和進階類型

理解TypeScript的類型系統是開發React應用的基礎。這包括熟悉基本類型（如`string`、`number`、`boolean`等），以及學習如何使用進階類型（如聯合類型和字面量類型）來創建更具表達力的程式碼。

### 給變數賦予類型

TypeScript是一種靜態類型語言，這意味著變數的類型在定義時就已經確定，並且不能在後續的程式碼中更改。這有助於減少錯誤並提高程式碼的可讀性。

```typescript
let name: string = 'John';
let age: number = 30;
```
不過大部分對於簡單的類型，TypeScript可以自動推斷出變數的類型，因此可以省略類型註解。

### 聯合類型
聯合類型允許一個變量接受多種類型的值。這就是說，一個變數可以是多種類型中的一種。
- 十分近似 c 語言的 union。

```typescript
let mixed: string | number;
mixed = 'Hello';
mixed = 42;
```

### 字面量類型
字面量類型允許你將變量限制為特定的值。

```typescript
type Status = 'open' | 'closed';

let exactValue: Status;
exactValue = 'open'; // 正確
exactValue = 'closed'; // 正確

exactValue = 'other'; // 錯誤
```

#### 練習題
1. 定義一個字面量類型`Status`，它可以是字符串`'loading'`、`'success'`或`'error'`中的任何一個。
2. 創建一個變量`status`，並賦給它`Status`類型的值。

    記得移動目錄
    ```bash
    cd "CH2 練習題"
    ```
    
    編譯
    ```bash
    tsc "2.1 基本和進階類型.ts"
    ```

## 2.2 類型斷言

類型斷言允許開發者指定一個值的具體類型，即使TypeScript無法直接推斷出這個類型。這在處理未知或`any`類型的數據時特別有用。
- 使用`as`語法
- 這類似於 c 語言的強制轉型

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

#### 練習題
1. 假設有一個變量`text`類型為`any`，它實際上是一個字串，使用類型斷言將`text`轉換為`string`類型。

    ```bash
    tsc "2.2 類型斷言.ts"
    ```

## 2.3 接口

接口在TypeScript中用於定義對象的結構，它是描述如何組織對象或複雜數據結構的有力工具。它們提供了一種清晰定義如何組織數據和函數類型的方法。
- 編譯後的程式碼中不會有接口的痕跡，只是一個純粹的 JavaScript 物件。

#### 示例程式碼
```typescript
interface User {
  name: string;
  age: number;
}

const printUser = (user: User) => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
};

let user: User = { name: "John", age: 30 };
printUser(user);
```

#### 練習題
1. 定義一個接口`Car`，它包含字符串類型的`brand`和數字類型的`year`屬性。

    ```bash
    tsc "2.3 接口.ts"
    ```

## 2.4 泛型

泛型允許在定義函數、接口或類時不預先指定具體的類型，而是在使用時再指定類型。這增加了程式碼的靈活性和重用性。

#### 示例程式碼
```typescript
// 函數加上冒號，表示函數的回傳值的類型
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

#### 練

習題
1. 使用泛型寫一個`wrapInArray`函數，它接受任意類型的參數並將其放入一個數組中返回。

   ```bash
    tsc "2.4 泛型.ts"
   ```