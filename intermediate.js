console.log('\n\nIntermediate Exercices\n\n')

// Exercice #1
function isPalindrome(str) {
	const reversed = str.split('').reverse().join('')
	const palindrome = reversed === str

	return palindrome
}

// Exercice #2
function fizzBuzz(num) {
	const divisibleBy3 = num % 3 === 0
	const divisibleBy5 = num % 5 === 0

	if (divisibleBy3 && divisibleBy5) {
		return 'FizzBuzz'
	} else if (divisibleBy3) {
		return 'Fizz'
	} else if (divisibleBy5) {
		return 'Buzz'
	} else {
		return num
	}
}

// Exercice #3
function factorial(positiveInt) {
	if (positiveInt < 0 || !Number.isInteger(positiveInt)) return null

	if (positiveInt === 0) return 1

	return positiveInt * factorial(positiveInt - 1)
}

// Exercice #4
function findLongestWord(sentence) {
	const sentenceAsArray = sentence.split(' ')
	const sortedByLength = sentenceAsArray.sort((a, b) => b.length - a.length)

	return sortedByLength[0]
}

// Exercice #5
function calculateAverage(numArray) {
	const sum = numArray.reduce((previous, current) => previous + current)

	return sum / numArray.length
}

// Exercice #6
function removeDuplicates(array) {
	const set = new Set(array)

	return Array.from(set)
}

// Exercice #7
function capitalizeFirstLetter(str) {
	const capitalized = str.replace(str[0], str[0].toUpperCase())

	return capitalized
}

// Exercice #8
function countOccurences(str, char) {
	const matched = [...str.matchAll(char)]

	return matched.length
}

// Exercice #9
function mergeArrays(arr1, arr2) {
	const mergedArr = [...arr1, ...arr2]
	const duplicateSafeArr = removeDuplicates(mergedArr)

	return duplicateSafeArr
}

// Exercice #10
function generatePassword(length) {
	const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
	let password = ''

	for (let index = 0; index < length; index++) {
		const char = randomFromArray(characters)
		password += char
	}

	return password
}

// Exercice #11
function charFrequency(str) {
	const foundChars = {}
	const strAsArray = str.split('')

	for (const char of strAsArray) {
		if (foundChars[char]) {
			foundChars[char]++
		} else {
			foundChars[char] = 1
		}
	}

	return foundChars
}

// Exercice #12
function arrayIntersection(arr1, arr2) {
	const duplicates = arr1.filter((value) => arr2.includes(value))

	return duplicates
}

// Exercice #13
function reverseWords(str) {
	const reversed = str.split(' ').reverse().join(' ')

	return reversed
}

// Exercice #14
function findMin(numArray) {
	return Math.min(...numArray)
}

console.log(isPalindrome('racecar'), isPalindrome('eehhh'))
console.log(fizzBuzz(9), fizzBuzz(10), fizzBuzz(30), fizzBuzz(31))
console.log(factorial(0), factorial(5), factorial(10))
console.log(findLongestWord('The quick brown fox jumps over the lazy dog VERYLONGWORD'))
console.log(calculateAverage([10, 20, 30, 40, 50]))
console.log(removeDuplicates([1, 'a', 'b', 1, 2, 'a', 'c', 'b']))
console.log(capitalizeFirstLetter('abcdefg'))
console.log(countOccurences('abcabcabcabcdefga', 'a'))
console.log(mergeArrays(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e', 'f']))
console.log(generatePassword(2), generatePassword(4), generatePassword(6), generatePassword(8))
console.log(charFrequency('abcabcabcabcdefga'))
console.log(arrayIntersection(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e', 'f']))
console.log(reverseWords('Hello world :D'))
console.log(findMin([5, 2, 3, 1, 6]))
