# CH3 物件導向進階知識

## 3.1 抽象類別, 基底類別, 超類別??
在物件導向程式設計中，Abstract Class（抽象類別）、Base Class（基底類別）、和 Super Class（超類別）這三個術語雖然有些關聯，但它們所指的不完全相同：

1. Abstract Class（抽象類別）：
    - 抽象類別是一種不能被實例化的類別，只能作為其他類別的基底類別來使用。抽象類別通常會包含一個或多個抽象方法，這些方法是沒有具體實現的，意味著繼承自抽象類別的子類別必須實現這些抽象方法。

2. Base Class（基底類別）：
    - 基底類別是其他類別繼承的類別。這是一個通用術語，用於描述一個類別在繼承體系中的角色。一個基底類別可以是具體的也可以是抽象的。

3. Super Class（超類別）：
    - 超類別通常指的是一個類別在繼承體系中的直接父類別。這個術語強調的是一個類別在特定繼承關係中的上一層位置。

總結：
- 一個抽象類別可以是基底類別也可以是超類別，這取決於它在繼承體系中的位置和用途。
- 一個基底類別可以是抽象的也可以是具體的，並且它可以是任何繼承自它的類別的超類別。
- 一個超類別是指在繼承關係中直接位於另一個類別之上的類別，這個類別可以是抽象的也可以是具體的。

因此，這三個術語在某些情況下可以指同一個類別，但在功能和用途上有所不同。

## 3.2 靜態方法和屬性

在物件導向程式設計中，靜態方法和屬性是綁定到類別本身，而不是類別的實例。這意味著您不需要創建類別的實例來訪問這些方法和屬性。它們通常用於實現與類別的特定實例無關的功能。

### 3.2.1 靜態屬性
- **定義**：靜態屬性是直接與類別關聯的屬性，而不是與類別的任何對象關聯。它們在所有實例之間共享，意味著任何對靜態屬性的修改都會影響類別的所有實例。
- **用途**：靜態屬性常用於儲存類別級別的數據，例如計數器、配置設置等。

```typescript
class Product {
   id: number;
   static productUUID = 0;

   constructor() {
      this.id = Product.productUUID++;
   }
}

const product1 = new Product();
const product2 = new Product();

console.log(product1.id); // 0
console.log(product2.id); // 1
```

### 3.2.2 靜態方法

- 定義：
  - 靜態方法是可以直接通過類別調用，而無需創建類別的實例的方法。
  - 這代表你使用 `this` 關鍵字來訪問靜態方法中的其他靜態屬性和方法。
- 用途：
  - 靜態方法通常用於實現那些與類別的任何特定實例無關的功能，如工具函數或創建類別實例的工廠方法。

```typescript
class MathUtil {
  static sum(x: number, y: number): number {
    return x + y;
  }

  static subtract(x: number, y: number): number {
    return x - y;
  }
}

console.log(MathUtil.sum(10, 5));        // 輸出: 15
console.log(MathUtil.subtract(10, 5));   // 輸出: 5
```

## 3.3 更多 super 關鍵字的用法

在 TypeScript 中，`super` 關鍵字用於調用父類別的方法或屬性。除了在建構子中調用父類別的建構子外，`super` 關鍵字還有其他用法：

```typescript
class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m.`);
  }
}

class Dog extends Animal {
  move(distance: number = 5) {
    console.log('Dog is barking.');
    super.move(distance);
  }
}
```

在這個例子中，`Dog` 類別繼承自 `Animal` 類別，並 Overwrite 了 `move` 方法。
- 在 `Dog` 類別的 `move` 方法中，我們使用 `super.move(distance)` 調用了父類別 `Animal` 的 `move` 方法。
- 這是允許我們在子類別中使用了 Overwrite 的方法的同時，還能調用父類別的方法。
