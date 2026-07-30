// Add a dollar sign to every price


const price = [100, 200, 300];

const formatted = price.map(price => `$${price}`);

console.log(formatted);
