// Utility functions
function randomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}

// Exercice #1
function greet() {
	console.log('Hello, World!')
}

// Exercice #2
function favoriteNumber() {
	console.log(42)
}

// Exercice #3
function magicEightBall() {
	const answers = ['Yes', 'No', 'Maybe', 'Ask again later']
	const randomAnswer = randomFromArray(answers)

	console.log(randomAnswer)
}

// Exercice #4
function getCurrentYear() {
	const date = new Date()
	const year = date.getFullYear()

	console.log(year)
}

// Exercice #5
function tellJoke() {
	const jokes = ['joke 1', 'joke 2', 'no creativity', 'joke 4']
	const randomJoke = randomFromArray(jokes)

	console.log(randomJoke)
}

// Exercice #6
function personalGreeting(name) {
	console.log(`Hello, ${name}!`)
}

// Exercice #7
function add(number1, number2) {
	console.log(number1 + number2)
}

// Exercice #8
function ageInMonths(ageInYears) {
	console.log(`You're atleast ${ageInYears * 12} months old`)
}

// Exercice #9
function celsiusToFahrenheit(celsius) {
	const fahrenheit = celsius * (9 / 5) + 32

	console.log(`${fahrenheit}°F`)
}

// Exercice #10
function getFullName(firstName, lastName) {
	console.log(`${firstName} ${lastName}`)
}

// Exercice #11
function calculateArea(length, width) {
	console.log(length * width)
}

// Exercice #12
function findMax(number1, number2) {
	const highestNumber = Math.max(number1, number2)
	console.log(highestNumber)
}

// Exercice #13
function countVowels(str) {
	const regex = /[^aeiou]+/gi // not vowels
	const allVowels = str.replaceAll(regex, '')
	console.log(`${str} - ${allVowels.length} vowels found`)
}

// Exercice #14
function calculateDiscount(price, discountPercentage) {
	const decimalPercentage = discountPercentage / 100
	console.log(`${price * decimalPercentage} SEK`)
}

// Exercice #15
function reverseString(str) {
	const reversed = str.split('').reverse().join('')

	console.log(reversed)
}

greet()
favoriteNumber()
magicEightBall()
getCurrentYear()
tellJoke()
personalGreeting('Sebastian')
add(40 + 2)
ageInMonths(20)
celsiusToFahrenheit(21.5)
getFullName('Sebastian', 'Nilsson')
calculateArea(5, 8)
findMax(8, 28)
countVowels('aedhikoluUOou')
calculateDiscount(500, 70)
reverseString('Reverse!')
