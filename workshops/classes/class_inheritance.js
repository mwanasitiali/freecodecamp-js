// Inheritance is the ability of one class to inherit properties and methods from another class.


// Extend keyword is used to create one class inherit from one another.

// Super keyword is used in the child class constructor to call the parent class constructor and initialize inherited properties 

// Child class it inherits from the parent class.



class Vehicle {
  move() {
    console.log("Vehicle is moving.");
  }
}

class Car extends Vehicle {}

const myCar = new Car();

myCar.move();
