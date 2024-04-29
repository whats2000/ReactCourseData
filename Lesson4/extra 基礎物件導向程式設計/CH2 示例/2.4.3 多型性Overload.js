var Printer = /** @class */ (function () {
    function Printer() {
    }
    // 實現方法
    Printer.prototype.print = function (text, separator) {
        if (Array.isArray(text)) {
            console.log(text.join(separator || ' ')); // 使用 separator 或默認空格連接文字
        }
        else {
            console.log(text); // 印出單一字符串
        }
    };
    return Printer;
}());
var printer = new Printer();
printer.print('Hello,world!'); // Hello,world!
printer.print(['Hello', 'world!'], '_'); // Hello_world!
