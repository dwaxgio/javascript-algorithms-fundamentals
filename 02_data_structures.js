// 1. Array
const numbers = [10, 20, 30];

numbers.push(40);
console.log(numbers[2]);
numbers.pop();
console.log(numbers[2]);

// 2. String
const word = "hello";
console.log(word);

// 2.2 Go through string
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// 3. Object
const user = {
  name: "dwaxgio",
  isAdmin: true,
};
console.log(user.name);
console.log(user.isAdmin);

// 3.2 Frequency count
const frequencyText = "hello world";

function countCharacter(text, character) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === character) {
      count++;
    }
  }

  return count;
}

console.log(countCharacter(frequencyText, "o")); // 2

// 4. Map
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a")); // 1
console.log(map.has("b")); // true

// 5. Set: Saves unique values
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set { 1, 2, 3 }

// 4.2 Detect duplicates
function hasDuplicate(arr) {
  const seen = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
console.log(hasDuplicate([1, 2, 3, 2])); // true

// 5. Slack: Last in, first out
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2

// 5.2 Validate parentheses
function isValidParentheses(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (last !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("({[]})")); // true
console.log(isValidParentheses("({[})")); // false
