class Animal {
  public name: string;
  private secret = "I'm a secret";
  protected familySecret = "Family secret";

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  shareSecret() {
    // console.log(this.secret);    // 錯誤：不能訪問 'private' 屬性
    console.log(this.familySecret); // 正確：可以訪問 'protected' 屬性
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.name); // Buddy
myDog.shareSecret(); // 輸出：Family secret
// myDog.familySecret; // 錯誤：不能在類別外部訪問 'protected' 屬性
