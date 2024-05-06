class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m.`);
  }
}

class Dog extends Animal {
  move(distance: number = 5) {
    console.log('Dog is barking.');
    super.move(distance);
  }
}

const dog = new Dog();
dog.move();
