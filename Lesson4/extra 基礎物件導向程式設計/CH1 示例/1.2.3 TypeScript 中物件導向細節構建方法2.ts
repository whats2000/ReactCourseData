
class Vehicle {
  constructor(private model: string, public color: string = 'white', public fuel: string = 'gasoline') {
  }
}

const myCar = new Vehicle('Toyota', 'red');
console.log(myCar.color); // red
console.log(myCar.fuel); // gasoline
