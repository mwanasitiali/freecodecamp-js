// does not modify the user object

function getFullName(user) {
	return `${user.firstName} ${user.lastName}`;
}

const user = {
	      firstName: "Mwanasiti",
	      lastName: "Ali"
};

console.log(getFullName(user));
