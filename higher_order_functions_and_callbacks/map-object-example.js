// From each user object extract only the name


const users = [
         {name: "Melissa", age: 22 },
	 {name: "Mwanasi", age: 20 },
	 {name: "Austine", age: 23 }, 
];


const ages = users.map(user => user.age);
console.log(ages);


