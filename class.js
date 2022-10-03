class Person {
  constructor(name, age, happiness) {
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }

  info() {
    console.log("Человек: " + this.name + ". Возраст: " + this.age);
  }
}

var alex = new Person("Alex", 45, true);
var bob = new Person("Bob", 20, false);
// console.log(alex.name);
// console.log(bob.age);
alex.info();
bob.info();
