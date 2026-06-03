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
