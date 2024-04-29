interface Shape {
  // You code here


  // End of your code
}

class Circle implements Shape {
  constructor(public radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  draw(): void {
    console.log(`Drawing a circle with area: ${this.calculateArea()}`);
  }
}

class Square _____ Shape {
  constructor(public side: number) {}

  calculateArea(): number {
    return this.side * this.side;
  }

  draw(): void {
    console.log(`Drawing a square with area: ${this.calculateArea()}`);
  }
}

class Triangle _____ Shape {
  constructor(public base: number, public height: number) {}

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }

  draw(): void {
    console.log(`Drawing a triangle with area: ${this.calculateArea()}`);
  }
}

function displayShapeInfo(shape: Shape) {
  shape.draw();
  console.log(`Area: ${shape.calculateArea()}`);
}

const circle = new Circle(5);
const square = new Square(4);
const triangle = new Triangle(3, 6);

displayShapeInfo(circle);
displayShapeInfo(square);
displayShapeInfo(triangle);
