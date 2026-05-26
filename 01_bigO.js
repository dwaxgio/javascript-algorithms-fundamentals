// Big O: Indicates how much the algoritmic cost grows with the input size
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // O(1) -> Constant time

// O(1) -> CONSTANT TIME : Does not matter how big the input is, the time will always be the same
const arr = [10, 20, 30, 40, 50];
console.log(arr[0]); // O(1) -> Constant time

// O(n) -> Linear time: The algoritm goes trhough all the elements in the input, so if the array grows, the time will grow proportionaly
function findNumber2(array, target) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return true;
    }
  }

  return false;
}
console.log(findNumber2([3, 6, 8, 9, 22], 22)); // O(n) -> Linear time

// O(N^2) -> QUADRATIC TIME: Normally occurs with nested loops. If the input grows, the time will grow proportionaly to the square of the input size
function printPairs(arr) {
  for (const a of arr) {
    for (const b of arr) {
      console.log(a, b);
    }
  }
}
console.log(printPairs([1, 2, 3])); // O(N^2) -> Quadratic time

// O(log n) -> LOGARITMIC TIME: Occurs when the problem is reduced by half with each iteration. For example, in a sorted array, we can use binary search to find an element in logarithmic time
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); // O(log n) -> Logaritmic time
