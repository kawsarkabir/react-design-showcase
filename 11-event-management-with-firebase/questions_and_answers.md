<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: {}

<i>Write your explanation here</i>
The variable greeting is declared but not initialized. When we try to assign an empty object to it, the JavaScript engine will simply create a new object and assign it to the variable. This is why the output of the code is {}.
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B:12

<i>Write your explanation here</i>
When we add a number and a string, the JavaScript engine will try to convert the string to a number before performing the addition. However, the string "2" cannot be converted to a number, so the result is NaN.
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:A: ['🍕', '🍫', '🥑', '🍔']

<i>Write your explanation here</i>
When we assign a new value to the favoriteFood property of the info object, we are only changing the value of the property, not the value of the food array. This is because food is a constant variable, which means that its value cannot be changed.
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:B: Hi there, undefined

<i>Write your explanation here</i>
When we call the sayHi() function without passing in an argument, the name parameter will be undefined. This is because JavaScript functions have default parameter values, and the default value for name is undefined.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>Write your explanation here</i>
The code initializes a variable count to 0 and defines an array nums containing [0, 1, 2, 3]. It then uses the forEach method to iterate over each element in the nums array.

Inside the forEach callback function, there's an if (num) condition. In JavaScript, if (num) evaluates to true for all numbers except 0. This is because 0 is considered a falsy value in JavaScript, while all other numbers are considered truthy.
</p>
</details>
