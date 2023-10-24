export default function fizzBuzz(minNumber: number, maxNumber: number) {
  let result = "";
  for (; minNumber <= maxNumber; minNumber++) {
    result += compareNumbers(minNumber);
  }
  return result;
}

function compareNumbers(number: number) {
  if (number % 15 === 0) return "fizzBuzz";
  if (number % 5 === 0) return "buzz";
  if (number % 3 === 0) return "fizz";
  return number.toString();
}
