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
