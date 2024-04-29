var Vehicle = /** @class */ (function () {
    function Vehicle(model, color, fuel) {
        if (color === void 0) { color = 'white'; }
        if (fuel === void 0) { fuel = 'gasoline'; }
        this.model = model;
        this.color = color;
        this.fuel = fuel;
    }
    return Vehicle;
}());
var myCar = new Vehicle('Toyota', 'red');
console.log(myCar.color); // red
console.log(myCar.fuel); // gasoline
