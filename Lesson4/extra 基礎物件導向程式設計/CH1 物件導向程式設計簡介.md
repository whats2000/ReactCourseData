# 第一章：物件導向程式設計簡介

## 1.1 OOP 基本概念

### 1.1.1 物件導向程式設計定義

物件導向程式設計（Object-Oriented Programming, OOP）是一種主要使用“物件”來組織程式碼的程式設計範式。在 OOP
中，物件是具有相關數據和功能的實體。這種設計範式與傳統的函數導向設計形成對比，後者更多地關注於實現邏輯的流程和步驟。

### 1.1.2 函數導向設計：

- 在函數導向設計中，程式碼被組織成一系列函數或程序，每個函數負責執行特定的任務。數據通常是全局的或通過參數傳遞到函數中，這可能導致數據管理混亂且難以維護。
- 例子：Alice 是一名學生，她有一系列分數，我們可以通過函數來計算她的平均分數、最大值和最小值。

```typescript
function calculateAverage(scores: number[]): number {
  let sum = 0;

  // 還記得 for of 迴圈嗎？ 
  // 這相當於 for (let i = 0; i < scores.length; i++) { const score = scores[i]; }
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function calculateMax(scores: number[]): number {
  // 使用 Math.max 函數來計算數組中的最大值，回想起展開運算符嗎？ 
  // Math.max(...scores) 相當於 Math.max(scores[0], scores[1], scores[2], ...)
  return Math.max(...scores);
}

function calculateMin(scores: number[]): number {
  // 使用 Math.min 函數來計算數組中的最小值
  // 同理，Math.min(...scores) 相當於 Math.min(scores[0], scores[1], scores[2], ...)
  return Math.min(...scores);
}

const aliceScores = [85, 90, 75, 95, 80];
const aliceAverage = calculateAverage(aliceScores);
const aliceMax = calculateMax(aliceScores);
const aliceMin = calculateMin(aliceScores);
```

然而，Alice不只擁有分數，她還有名字。在函數導向設計中，隨者程式碼的增長，這些變數可能會變得難以管理。你可能會很難尋找到與
Alice 相關的所有數據和函數。

```typescript
// 這些變數都是與 Alice 相關的，但是它們分散在整個程式碼中
const aliceName = 'Alice';
const aliceScores = [85, 90, 75, 95, 80];
const aliceAge = 18;
```

再來，考慮到是學生不只有 Alice 一個，我們可能會有 Bob、Charlie 等等。這樣的設計方式會導致大量重複的程式碼，並且難以維護。

```typescript
const bobName = 'Bob';
const bobScores = [90, 85, 80, 95, 75];
const bobAge = 19;
const bobAverage = calculateAverage(bobScores);
const bobMax = calculateMax(bobScores);

const charlieName = 'Charlie';
const charlieScores = [75, 80, 85, 90, 95];
const charlieAge = 20;
const charlieAverage = calculateAverage(charlieScores);
const charlieMax = calculateMax(charlieScores);
```

其實現實中，也有很多不同類別，但他們擁有些共同的特徵。
這裡我準備了一個表格，將日常生活中常見的物件映射到 OOP 的結構中：

| 類別 class        | 物件 Object            | 屬性 property               | 方法 method                            |
 |-----------------|----------------------|---------------------------|--------------------------------------|
| 車輛 Vehicle      | 我的車 myToyota         | 顏色 color: "紅色 Red"        | 啟動 start(): "發動機啟動"                  |
|                 |                      | 型號 model: "SUV"           | 停止 stop(): "車輛停止"                    |
|                 |                      | 燃料 fuel: "汽油"             | 加速 accelerate(): "車輛加速"              |
| 手機 Mobile Phone | 我的手機 myIphone        | 品牌 brand: "Apple"         | 打電話 makeCall(number): "撥打電話到 number" |
|                 |                      | 型號 model: "iPhone 12"     | 發送訊息 sendMessage(text): "發送訊息 text"  |
|                 |                      | 電池 battery: "100%"        | 拍照 takePhoto(): "拍照並儲存至相簿"           |
| 圖書 Library Book | 我的書 myJavaScriptBook | 書名 title: "學習 JavaScript" | 翻頁 turnPage(): "到下一頁"                |
|                 |                      | 作者 author: "John Doe"     | 顯示資訊 showInfo(): "顯示書籍信息"            |
|                 |                      | 頁數 pages: 300             |                                      |
| 圖書 Library Book | 我的書 myTypeScriptBook | 書名 title: "學習 TypeScript" | 翻頁 turnPage(): "到下一頁"                |
|                 |                      | 作者 author: "John Sen"     | 顯示資訊 showInfo(): "顯示書籍信息"            |
|                 |                      | 頁數 pages: 250             |                                      |

這個表格通過將常見的日常物件抽象化為類別、物件、屬性和方法，展示了物件導向程式設計的核心元素。這些元素之間的關係如下：

- 類別（Class）：定義了一類事物的通用特徵，相當於現實世界中的“類型”或“範疇”。
- 物件（Object）：是類別的實例，具體化了類別的抽象概念。可以說是依照類別的定義創建的具體對象。
- 屬性（Property）：描述了物件的特徵，如顏色、型號等，相當於物件的狀態。
- 方法（Method）：描述了物件可以執行的操作，反映了物件可以對外界或自身狀態進行的影響。

### 1.1.3 物件導向設計：

- 物件導向設計將數據和與之相關的行為封裝到物件中。每個物件代表一個具體的實體或概念，並包含表示其特徵的數據（屬性）和可以執行的操作（方法）。
- 你可以想像是將一個類別視為一個模板，用於創建具有相同特徵和行為的多個物件。這樣的設計方式有助於提高程式碼的重用性、可讀性和可維護性。
- 基本上當你發現你的程式碼中有重複的部分，或者你想要將相關的數據和行為組織在一起時，物件導向設計就是一個很好的選擇。
- 例子：我們可將上方的函數導向設計轉換為物件導向設計。蒐集共有的特徵，並將其封裝到一個 Student 類別中。

```typescript
class Student {
  // 在部分編程語言中，屬性可以直接定義在建構子中，但在 TypeScript 中，需要先聲明再賦值
  // 可以使用 interface 來定義類別的屬性，利用 implements 關鍵字來實現定義
  // 在這裡，我們直接在類別中聲明屬性，並在建構子中賦值
  public name: string;       // 學生名字
  public age: number;        // 學生年齡
  private scores: number[];  // 學生成績

  // 建構子 constructor 用於初始化物件的屬性，每個類別只能有一個建構子
  constructor(name: string, age: number, scores: number[]) {
    this.name = name;
    this.age = age;
    this.scores = scores;
  }

  // 方法 method 用於定義物件可以執行的操作，可以在類別中定義多個方法
  calculateAverage(): number {
    let sum = 0;
    for (const score of this.scores) {
      sum += score;
    }
    return sum / this.scores.length;
  }

  calculateMax(): number {
    return Math.max(...this.scores);
  }

  calculateMin(): number {
    return Math.min(...this.scores);
  }
}

const studentAlice = new Student('Alice', 18, [85, 90, 75, 95, 80]);
const studentBob = new Student('Bob', 19, [90, 85, 80, 95, 75]);
const studentCharlie = new Student('Charlie', 20, [75, 80, 85, 90, 95]);
```

## 1.2 TypeScript 中物件導向細節

在這個小節中，我們將詳細介紹 TypeScript 中物件導向程式設計的核心概念，包括類別的定義、屬性、方法、建構子、繼承以及存取修飾符等。了解這些概念將幫助你在
TypeScript 中實現更結構化和模組化的程式碼設計。

### 1.2.1 類別（Class）

類別是 TypeScript 中實現物件導向程式設計的基石。一個類別在概念上是一個模板，用於創建具有特定屬性和方法的物件。

- 定義類別：
    - 使用 `class` 關鍵字來定義一個類別。
    - 類別名稱通常首字母大寫。並採用大駝峰命名法（CamelCase）。
- 實例化類別：
    - 使用 `new` 關鍵字創建類別的新實例。

```typescript
class Vehicle {

}

const myCar = new Vehicle();
```

### 1.2.2 建構子（Constructor）

建構子是一個特殊的方法，用於在創建類別實例時初始化類別的新對象。

特色：

- 建構子方法名稱為 `constructor`。在不同的程式語言中，建構子的名稱可能不同，但在 TypeScript 中，它是固定的。
- 當使用 `new` 關鍵字創建類別的新實例時，建構子會自動調用。

```typescript
class Vehicle {
  constructor() {
  }
}
```

### 1.2.3 屬性（Property）

屬性是類別中定義的變量，用於存儲資訊或狀態。

- 屬性類型：
    - 在 TypeScript 中，你可以為屬性指定類型。這在 JavaScript 中是不支持的。
- 存取修飾符：
    - `public`：預設的存取修飾符，表示屬性可以在類別內部和外部訪問。如果沒有指定存取修飾符，則默認為 `public`。
    - `private`：表示屬性只能在類別內部訪問。意思是，只有在類別的方法中才能訪問這個屬性。實例化的對象無法訪問。
    - `protected`：表示屬性可以在類別內部和繼承的子類別中訪問 (後面會提到)。

至於宣告屬性有多種方式

1. 類別中定義屬性：
   - 這種方式可以給予預設值，記得如果有可選的參數，一定要放在最後面
 ```typescript
 class Vehicle {
   private model: string;
   public color: string = 'white';
   public fuel: string = 'gasoline';
       
   constructor(model: string, color?: string, fuel?: string) {
     this.model = model;
     if (color)
       this.color = color;
     if (fuel)
       this.fuel = fuel;
   }
 }
      
 const myCar = new Vehicle('Toyota', 'red');
 ```
2. 建構子中定義屬性：
    - 這方法也可給予預設值

```typescript
class Vehicle {
  constructor(private model: string, public color: string = 'white', public fuel: string = 'gasoline') {
    // 這裡不需要再寫任何賦值語句
  }
}

const myCar = new Vehicle('Toyota', 'red');
```

在 TypeScript 的類別中，`this` 關鍵字在方法中的作用非常關鍵，它用於參照當前類別實例的上下文。下面我將詳細解釋 `this` 在類別方法中的使用，並給出具體的例子來幫助學生理解。

### 1.2.4 方法（Method）

方法是定義在類別中的函數，用於描述一個類別的行為或功能。

#### 方法語法：
- 方法在類別內部定義，可以訪問類別的屬性和其他方法。
- 使用 `this` 關鍵字來訪問類別的屬性和其他方法，`this` 代表當前實例。

#### 方法存取修飾符：
- 方法也可以使用存取修飾符，用於控制方法的訪問權限。
- `public`：預設的存取修飾符，表示方法可以在類別內部和外部訪問。
- `private`：表示方法只能在類別內部訪問。
- `protected`：表示方法可以在類別內部和繼承的子類別中訪問。

```typescript
class Vehicle {
  constructor(private model: string, public color: string = 'white', public fuel: string = 'gasoline') {
    // 在建構子中，`this` 指向新創建的實例。
  }

  // 顯示車輛資訊的公開方法
  displayInfo(): string {
    // 使用 `this` 來訪問實例的屬性
    return `This vehicle is a ${this.color} ${this.model} running on ${this.fuel}.`;
  }

  // 私有方法，只能在類別內部調用
  private getVehicleModel(): string {
    // `this.model` 直接訪問私有屬性
    return this.model;
  }
}

const myCarA = new Vehicle('Toyota', 'red');
console.log(myCarA.displayInfo());  // This vehicle is a red Toyota running on gasoline.

const myCarB = new Vehicle('BMW', 'blue', 'diesel');
console.log(myCarB.displayInfo());  // This vehicle is a blue BMW running on diesel.
```

在以上例子中：
- `this.model`, `this.color`, `this.fuel`：
  - 這些是通過 `this` 訪問的類別實例的屬性。這是規定性與法，不同程式語言可能有不同的規定。
  - 這種方式讓你能夠在類別的任何方法中訪問實例的屬性。
  - 簡單來說，`myCarA.displayInfo()` 調用 `displayInfo` 方法，並使用 `this` 來訪問 `myCarA` 的屬性。
  - 而當`myCarB.displayInfo()` 調用 `displayInfo` 方法時，`this` 會指向 `myCarB` 的屬性。
- **`displayInfo` 方法**：這是一個公開方法，任何創建的 `Vehicle` 實例都可以調用它。它使用 `this` 來獲取當前實例的類別屬性值，以組成和返回一個描述車輛的字符串。
- **`getVehicleModel` 方法**：這是一個私有方法，意味著它只能被類別內的其他方法（比如 `displayInfo`）調用。它同樣使用 `this` 來訪問私有屬性 `model`。

## 1.3 練習題：創建一個類別來管理學生信息

### 任務描述
假設你需要為一個學校開發一個系統來管理學生的基本信息和成績。每個學生有名字、年齡、學號和一系列成績。你的任務是創建一個`Student`類別，並使用這個類別來創建幾個學生對象，計算他們的平均成績、最高和最低成績。

### 需求
1. **創建一個 `Student` 類別**
   - 屬性應包括：`name`（名字），`age`（年齡），`studentID`（學號），`scores`（成績數組）。
   - 定義一個建構子來初始化這些屬性。

2. **為 `Student` 類別添加方法**
   - `calculateAverage()`：計算並返回學生的平均成績。
   - `findMaxScore()`：找出並返回學生的最高成績。
   - `findMinScore()`：找出並返回學生的最低成績。

3. **創建學生對象並應用你的方法**
   - 創建至少三個學生對象。
   - 輸出每個學生的平均成績、最高成績和最低成績。
