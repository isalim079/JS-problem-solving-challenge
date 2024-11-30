/**
 * Write a program that prints numbers from 1 to 100:

Print "Fizz" for multiples of 3.
Print "Buzz" for multiples of 5.
Print "FizzBuzz" for multiples of both 3 and 5. Topics: Loops, conditional statements.
*/

const fizzBuzz = () => {
  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      numbers.push("FizzBuzz");
    } else if (i % 3 === 0) {
      numbers.push("Fizz");
    } else if (i % 5 === 0) {
      numbers.push("Buzz");
    } else {
      numbers.push(i);
    }
  }
  return numbers;
};

console.log(fizzBuzz());
