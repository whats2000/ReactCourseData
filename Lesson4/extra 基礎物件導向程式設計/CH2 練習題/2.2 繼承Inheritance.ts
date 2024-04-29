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
class Character {
  protected health: number = 100;

  constructor(public name: string) {
  }

  displayHealth() {
    console.log(`${this.name}'s health: ${this.health}`);
  }

  decreaseHealth(value: number) {
    this.health -= value;
    this.checkHealth();
  }

  private checkHealth() {
    if (this.health <= 0) {
      console.log(`${this.name} is dead`);
    }
  }
}

class Warrior _______ Character {
  // Your code here

  // End of your code

  attackWithSword(target: Character) {
    console.log(`${this.name} attacks ${target.name} with sword`);
    // Your code here


    // End of your code
  }
}

class Mage _______ Character {
  // Your code here

  // End of your code

  castSpell(target: Character) {
    console.log(`${this.name} casts a spell on ${target.name}`);
    // You code here


    // End of your code
  }
}


const warrior = new Warrior('Warrior');
const mage = new Mage('Mage');
warrior.displayHealth();
mage.displayHealth();

warrior.attackWithSword(mage);
warrior.displayHealth();
mage.displayHealth();

mage.castSpell(warrior);
warrior.displayHealth();
mage.displayHealth();
