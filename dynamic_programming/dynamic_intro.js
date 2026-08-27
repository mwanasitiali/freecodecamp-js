// Given coin denominations and a target amount,
// find the fewest coins needed to make that amount exactly
// (or determine it's impossible)


function coinChange(coins, amount) {
 // table[i] = fewest coins needed to make amount i
	
 const table = new Array(amount + 1).fill(Infinity);
 table[0] = 0; // 0 coins needed to make amount 0
 for (let i = 1; i <= amount; i++) {
 	for (const coin of coins) {
 	if (coin <= i && table[i - coin] + 1 < table[i]) {
 	table[i] = table[i - coin] + 1;
 	}
 	}
 }
 return table[amount] === Infinity ? -1 : table[amount];
}
console.log(coinChange([1, 5, 10, 25], 63)); 
console.log(coinChange([2], 3)); 
