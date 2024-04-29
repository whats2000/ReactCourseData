interface Shape {
  area: number;

  draw(): void;
}

class Circle implements Shape {
  area: number;

  constructor(public radius: number) {
    this.area = Math.PI * Math.pow(this.radius, 2);
  }

  draw() {
    console.log("Drawing a circle");
  }
}

class Square implements Shape {
  area: number;

  constructor(public side: number) {
    this.area = Math.pow(this.side, 2);
  }

  draw() {
    console.log("Drawing a square");
  }
}

const circle = new Circle(5);
const square = new Square(5);

// 使用多型性
for (const shape of [circle, square] as Shape[]) {
  // 不需要知道具體的類別，只需要知道它們實現了 Shape 介面，那我們就可以調用 area 屬性
  console.log(shape.area);
  // 同樣，因為實現了 Shape 介面，那我們就可以調用 draw 方法
  shape.draw();
}
