var Vehicle = /** @class */ (function () {
    function Vehicle(model, color, fuel) {
        this.color = 'white';
        this.fuel = 'gasoline';
        this.model = model;
        if (color) {
            this.color = color;
        }
        if (fuel) {
            this.fuel = fuel;
        }
    }
    return Vehicle;
}());
var myCar = new Vehicle('Toyota', 'red');
console.log(myCar.color); // red
console.log(myCar.fuel); // gasoline
