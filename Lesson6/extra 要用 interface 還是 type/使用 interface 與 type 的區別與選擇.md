# 使用 `interface` 與 `type` 的區別與選擇

在 TypeScript 中，`interface` 和 `type` 是兩種定義物件類型的方式。雖然它們在某些方面很相似，但在使用場景和語法特性上存在一些差異。這篇講義將詳細探討這兩者之間的差異、相似之處，以及在開發中如何選擇使用。

## 1.1 `interface` 與 `type` 的基本概念

### 1.1.1 `interface`
`interface` 用於定義物件的結構，包括物件的屬性名稱、類型以及方法。它通常用於描述物件的形狀或結構，並且可以進行擴展和合併。

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}
```

### 1.1.2 `type`
`type` 是一個更通用的類型別名，可以用來定義任意類型，包括物件、基本類型、聯合類型、交叉類型等。它在語法上更加靈活，但在擴展和合併方面不如 `interface`。

```typescript
type Person = {
  name: string;
  age: number;
  greet(): void;
};
```

## 1.2 `interface` 與 `type` 的相同之處

- 都可以用來描述物件的形狀。
- 都可以用來實現複合類型（如聯合類型和交叉類型）。
- 都可以用來描述函數類型和數組類型。

## 1.3 `interface` 與 `type` 的差異

### 1.3.1 擴展性

#### `interface`
`interface` 可以進行擴展（extend），這意味著你可以創建一個新介面來繼承現有的介面，並添加新的屬性或方法。

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}
```

#### `type`
`type` 可以使用交叉類型（intersection types）來模擬擴展，但無法像 `interface` 一樣進行多次合併。

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  salary: number;
};
```

### 1.3.2 合併（Declaration Merging）

#### `interface`
`interface` 支持合併，這意味著你可以多次聲明同一個介面，TypeScript 會將它們合併為一個。

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 最終的 Person 介面為：{ name: string; age: number; }
```

#### `type`
`type` 不支持合併，如果嘗試多次聲明同一個類型別名會導致錯誤。

```typescript
type Person = {
  name: string;
};

// 這會導致錯誤
type Person = {
  age: number;
};
```

### 1.3.3 適用範圍

#### `interface`
`interface` 主要用於描述物件的形狀，適用於需要擴展和合併的場景。

#### `type`
`type` 適用於定義任意類型，包括基本類型、聯合類型、交叉類型等。它的靈活性使其適用範圍更廣。

### 1.3.4 進階類型功能

#### `type`
`type` 支援更進階的類型功能，如：
- 聯合類型和交叉類型
- 條件類型（conditional types）
- 映射類型（mapped types）

```typescript
// 聯合類型
type StringOrNumber = string | number;

// 條件類型
type IsString<T> = T extends string ? true : false;

// 映射類型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

## 1.4 如何選擇使用 `interface` 或 `type`

- 如果需要描述物件的形狀並且需要擴展和合併，建議使用 `interface`，這通常用於擴展 Library 或 Framework 提供的介面。
- 如果需要定義聯合類型、交叉類型、基本類型或其他進階類型功能，建議使用 `type`。
- 在某些情況下，二者都可以滿足需求，這時可以根據團隊的編碼風格和習慣來選擇。目前大部分情況下，`interface` 和 `type` 可以互換使用。
- 實作上我會優先使用 `type`，因為它更加靈活，並且支援更多的進階類型功能。

## 1.5 實際應用中的例子

以下是一些實際應用中使用 `interface` 和 `type` 的例子：

### 1.5.1 使用 `interface` 擴展物件結構

```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = {
  color: "red",
  sideLength: 10,
};
```

### 1.5.2 使用 `type` 定義聯合類型和交叉類型

```typescript
type SuccessResponse = {
  status: "success";
  data: any;
};

type ErrorResponse = {
  status: "error";
  error: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

const response: ApiResponse = {
  status: "success",
  data: { id: 1, name: "John Doe" },
};
```

### 1.5.3 使用 `type` 定義條件類型和映射類型

```typescript
type IsString<T> = T extends string ? true : false;

type Example1 = IsString<string>; // true
type Example2 = IsString<number>; // false

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = Readonly<Person>;
```

## 1.6 參考資料

- [TypeScript: Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript: Handbook - Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
