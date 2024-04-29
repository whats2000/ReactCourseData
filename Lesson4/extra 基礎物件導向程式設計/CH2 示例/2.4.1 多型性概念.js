var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
        this.area = Math.PI * Math.pow(this.radius, 2);
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a circle");
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
        this.area = Math.pow(this.side, 2);
    }
    Square.prototype.draw = function () {
        console.log("Drawing a square");
    };
    return Square;
}());
var circle = new Circle(5);
var square = new Square(5);
// 使用多型性
for (var _i = 0, _a = [circle, square]; _i < _a.length; _i++) {
    var shape = _a[_i];
    // 不需要知道具體的類別，只需要知道它們實現了 Shape 介面，那我們就可以調用 area 屬性
    console.log(shape.area);
    // 同樣，因為實現了 Shape 介面，那我們就可以調用 draw 方法
    shape.draw();
}
