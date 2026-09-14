class Vehicle {
constructor(brand, year) {
	this.brand = brand;
	this.year = year;
}
sayBrand() {
	console.log(`${this.brand} is the car's invented year ${this.year}.`);
}
}

const vehicle1 = new Vehicle("Toyota", 2024);
const vehicle2 = new Vehicle("CLS3", 1900);

vehicle1.sayBrand();
vehicle2.sayBrand();
