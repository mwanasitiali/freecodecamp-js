function countVowels(string) {
	const vowels = "aeiou";
	return string.toLowerCase().split("").filter(ch => vowels.includes(ch)).length;
}

console.log(countVowels("hello"));

