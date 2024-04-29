var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log("Driving a vehicle unknown");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log("Driving a car");
    };
    return Car;
}(Vehicle));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bicycle.prototype.drive = function () {
        console.log("Riding a bicycle");
    };
    return Bicycle;
}(Vehicle));
var VehicleX = /** @class */ (function (_super) {
    __extends(VehicleX, _super);
    function VehicleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VehicleX;
}(Vehicle));
var myVehicle = new Vehicle();
var myCar = new Car();
var myBicycle = new Bicycle();
var myVehicleX = new VehicleX();
myVehicle.drive(); // Output: Driving a vehicle
myCar.drive(); // Output: Driving a car
myBicycle.drive(); // Output: Riding a bicycle
myVehicleX.drive(); // Output: Driving a vehicle unknown
