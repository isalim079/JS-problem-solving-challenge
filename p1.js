//? 1. Reverse a String
//? Write a function that takes a string as input and returns the reversed string.
//? Example Input: "hello"
//? Example Output: "olleh"
//? Topics: String manipulation, loops.

const reverse = (string) => {
   return string.split('').reverse().join('')
}
console.log(reverse('hello'));
