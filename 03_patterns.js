// 1. Frequency Counter: Count occurrences of elements
function countChars(str) {
  const freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }

// 1.2 Anagram Check: Check if two strings are anagrams
// example: listen / silent
function areAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;

  const freq = {};

  for (const char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (const char of s2) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// 2. Two Pointers: Use two pointers to traverse data structures
// 2.1 Sum of Two Numbers: Find if two numbers sum to a target
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return true;

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
console.log("2");
console.log(twoSumSorted([1, 2, 3, 4, 6], 6)); // true (2 + 4 = 6)
// Time: O(n) - Linear time complexity
// Space: O(1) - Constant space complexity
