class Vehicle {
  drive(): void {
    console.log("Driving a vehicle unknown");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Driving a car");
  }
}

class Bicycle extends Vehicle {
  drive(): void {
    console.log("Riding a bicycle");
  }
}

class VehicleX extends Vehicle {
}

const myVehicle = new Vehicle();
const myCar = new Car();
const myBicycle = new Bicycle();
const myVehicleX = new VehicleX();

myVehicle.drive();   // Output: Driving a vehicle
myCar.drive();       // Output: Driving a car
myBicycle.drive();   // Output: Riding a bicycle
myVehicleX.drive();  // Output: Driving a vehicle unknown
