/**
 * 1. 練習設計一個類別：
 *     - 創建一個名為 `Car` 的類別，代表一輛汽車。
 *     - 為 `Car` 類別添加私有屬性 `speed`（當前速度）和 `fuel`（剩餘燃料百分比）。
 *     - 添加公開方法 `accelerate()` 和 `brake()`，分別用於加速和減速。
 *        - 當加速時，速度增加 10，燃料消耗 5%。
 *        - 當減速時，速度減少 10。
 *     - 為 `Car` 類別添加一個公開方法 `addFuel(percentage: number)`，用於增加燃料百分比。
 *
 * 2. 實現安全的數據修改：
 *     - 確保 `speed` 和 `fuel` 的修改只能通過類別的方法來進行。不允許外部直接修改這些屬性。
 *     - 在 `accelerate()` 和 `brake()` 方法中加入檢查
 *        - 確保速度不會低於 0 或高於一個最大值 100。
 *        - 同樣，確保燃料不會低於 0 或超過 100%。
 *
 * 3. 撰寫測試程式碼：
 *     - 創建一個 `Car` 對象，初始速度為0，燃料為50%。
 *     - 調用加速方法幾次，然後調用減速方法，並觀察速度和燃料的變化。
 *     - 嘗試添加燃料並檢查燃料是否有正確增加。
 */
class Car {
  // Your code here
  constructor() {
  }
  // End of your code

  accelerate() {
    // Your code here


    // End of your code
  }

  brake() {
    // Your code here


    // End of your code
    this.printStatus();
  }

  addFuel(percentage: number) {
    // Your code here


    // End of your code
    this.printStatus();
  }

  private printStatus() {
    console.log(`Speed: ${this.speed}, Fuel: ${this.fuel}%`);
  }
}

// Your test code here
const myCar = new Car(); // 給予初始速度為0，燃料為50%
myCar.accelerate();           // 速度增加 10，燃料減少 5%
myCar.accelerate();           // 速度增加 10，燃料減少 5%
myCar.brake();                // 速度減少 10
myCar.addFuel(20);  // 燃料增加 20%
// End of your test
