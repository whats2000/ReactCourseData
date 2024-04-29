class Vehicle {
  private model: string;
  public color: string = 'white';
  public fuel: string = 'gasoline';

  constructor(model: string, color?: string, fuel?: string) {
    this.model = model;
    if (color) {
      this.color = color;
    }
    if (fuel) {
      this.fuel = fuel;
    }
  }
}

const myCar = new Vehicle('Toyota', 'red');
console.log(myCar.color); // red
console.log(myCar.fuel); // gasoline
