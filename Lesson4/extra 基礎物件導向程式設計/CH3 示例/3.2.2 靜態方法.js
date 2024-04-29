var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.sum = function (x, y) {
        return x + y;
    };
    MathUtil.subtract = function (x, y) {
        return x - y;
    };
    return MathUtil;
}());
console.log(MathUtil.sum(10, 5)); // 輸出: 15
console.log(MathUtil.subtract(10, 5)); // 輸出: 5
