class AnimalA {
    name = 'John Doe';
    speak = () => {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  // 等同於
  class AnimalB {
    constructor() {
      this.name = 'John Doe';
    }
  
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  let animalA = new AnimalA();
  animalA.speak(); // John Doe makes a noise.
  
  let animalB = new AnimalB();
  animalB.speak(); // John Doe makes a noise.