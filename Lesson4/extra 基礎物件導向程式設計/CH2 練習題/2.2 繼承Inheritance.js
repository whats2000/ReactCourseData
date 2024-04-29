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
/**
 * 1. 背景
 *    - 假設你正在開發一個遊戲應用，需要模擬不同類型的遊戲角色。
 *    - 有一個基礎的角色類別 Character，其中包括了所有角色共有的特性和功能。
 *    - 你需要擴展這個基礎類別來創建具體的角色類別，如 Warrior 和 Mage。
 *
 * 2. 任務
 *    - 定義一個基礎類別 Character，具有以下屬性和方法：
 *    - 一個 protected 屬性 health 代表角色的生命值。初始化為 100。
 *    - 一個 public 方法 displayHealth() 用於顯示角色的當前生命值。
 *
 * 3. 從 Character 類別繼承兩個子類別：Warrior 和 Mage。
 *    - 其中 Mage 類別繼承自 Character，並添加一個特有的屬性 mana 代表法力值。初始化為 100。
 *    - Warrior 類別也繼承自 Character，並添加一個特有的屬性 strength 代表力量值。初始化為 10。
 *    - 每個子類別應該有一個特定的 public 方法來模擬角色的特殊行為。
 *      - Warrior 有 attackWithSword() 會對另一個角色 health 造成與力量同樣的傷害。並提升自己的 strength 10 點。
 *      - Mage 有 castSpell() 會對另一個角色 health 造成 30 傷害。並消耗 mana 10 點。
 *
 * 創建這些類別的實例，並在一個主程式中展示它們的行為。
 */
var Character = /** @class */ (function () {
    function Character(name) {
        this.name = name;
        this.health = 100;
    }
    Character.prototype.displayHealth = function () {
        console.log("".concat(this.name, "'s health: ").concat(this.health));
    };
    Character.prototype.decreaseHealth = function (value) {
        this.health -= value;
        this.checkHealth();
    };
    Character.prototype.checkHealth = function () {
        if (this.health <= 0) {
            console.log("".concat(this.name, " is dead"));
        }
    };
    return Character;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.strength = 10;
        return _this;
    }
    Warrior.prototype.attackWithSword = function (target) {
        console.log("".concat(this.name, " attacks ").concat(target.name, " with sword"));
        target.decreaseHealth(this.strength);
        this.strength += 10;
    };
    return Warrior;
}(Character));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mana = 100;
        return _this;
    }
    Mage.prototype.castSpell = function (target) {
        console.log("".concat(this.name, " casts a spell on ").concat(target.name));
        target.decreaseHealth(30);
        this.mana -= 10;
    };
    return Mage;
}(Character));
var warrior = new Warrior('Warrior');
var mage = new Mage('Mage');
warrior.displayHealth();
mage.displayHealth();
warrior.attackWithSword(mage);
warrior.displayHealth();
mage.displayHealth();
mage.castSpell(warrior);
warrior.displayHealth();
mage.displayHealth();
