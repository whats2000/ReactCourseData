var Vehicle = /** @class */ (function () {
    function Vehicle(model, color, fuel) {
        if (color === void 0) { color = 'white'; }
        if (fuel === void 0) { fuel = 'gasoline'; }
        this.model = model;
        this.color = color;
        this.fuel = fuel;
        // 在建構子中，`this` 指向新創建的實例。
    }
    // 顯示車輛資訊的公開方法
    Vehicle.prototype.displayInfo = function () {
        // 使用 `this` 來訪問實例的屬性
        return "This vehicle is a ".concat(this.color, " ").concat(this.model, " running on ").concat(this.fuel, ".");
    };
    // 私有方法，只能在類別內部調用
    Vehicle.prototype.getVehicleModel = function () {
        // `this.model` 直接訪問私有屬性
        return this.model;
    };
    return Vehicle;
}());
var myCarA = new Vehicle('Toyota', 'red');
console.log(myCarA.displayInfo()); // This vehicle is a red Toyota running on gasoline.
var myCarB = new Vehicle('BMW', 'blue', 'diesel');
console.log(myCarB.displayInfo()); // This vehicle is a blue BMW running on diesel.
