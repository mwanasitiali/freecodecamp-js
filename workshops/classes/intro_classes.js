// A class is a blueprint of how smthng should b e built

// A constructor is a special method that runs automaticallly when we create a new object

// This (this.name)keyword refers to the current object being called

// New keyword creates a new object from the class


class Person {
	constructor(name, age) {
	this.name = name;
	this.age = age;
}
  

//const person1 = new Person("Mwanasiti", 20);
//console.log(person1.name);
//console.log(person1.age);

//const person2 = new Person("Austine", 28);
//console.log(person2.name);
//console.log(person2.age);

// A method is a function that belongs to an object  / 

greet() {
	console.log(`Hello, my name is ${this.name}.`) 

}
}
const person3 = new Person("Rukia", 30); 
person3.greet();
