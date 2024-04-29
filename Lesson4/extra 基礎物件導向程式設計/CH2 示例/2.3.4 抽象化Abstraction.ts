abstract class AbstractShape {
  abstract area(): number;

  draw() {
    console.log("Drawing the shape with area: " + this.area());
  }
}

class Circle extends AbstractShape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
circle.draw();  // Output: Drawing the shape with area: 78.53981633974483
