export default function fizzBuzz(minNumber: number, maxNumber: number) {
  const minComparedNumber = compareNumbers(minNumber);

  if (minNumber < maxNumber) {
    const maxComparedNumber = compareNumbers(maxNumber);
    return minComparedNumber.toString() + maxComparedNumber.toString();
  }
  return minComparedNumber.toString();
}

function compareNumbers(number: number) {
  if (number % 15 === 0) return "fizzBuzz";
  if (number % 5 === 0) return "buzz";
  if (number % 3 === 0) return "fizz";
  return number;
}
