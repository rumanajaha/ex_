function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n);
console.log("Squared numbers:", squared);

const user = {
  name: "Bob",
  age: 30,
  isActive: true,
};

console.log(`${user.name} is ${user.age} years old.`);

for (let i = 0; i < numbers.length; i++) {
  console.log(`Number at index ${i}:`, numbers[i]);
}

const add = (a, b) => a + b;
console.log("3 + 5 =", add(3, 5));
