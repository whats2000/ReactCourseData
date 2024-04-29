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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.secret = "I'm a secret";
        this.familySecret = "Family secret";
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.shareSecret = function () {
        // console.log(this.secret);    // 錯誤：不能訪問 'private' 屬性
        console.log(this.familySecret); // 正確：可以訪問 'protected' 屬性
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy");
console.log(myDog.name); // Buddy
myDog.shareSecret(); // 輸出：Family secret
// myDog.familySecret; // 錯誤：不能在類別外部訪問 'protected' 屬性
