// Напишите функцию на JavaScript с названием "findVowels",
// которая принимает строку в качестве аргумента и возвращает количество гласных букв в этой строке.
// Примеры использования функции:
//   findVowels("Hello, World!"); // 3
//   findVowels("JavaScript"); // 3
//   findVowels("42 is the answer."); // 4
//   findVowels("Brrrr"); // 0

function findVowels1(str) {
  let vowelLetters = ['a','e','i','o','u']
  str.toLowerCase().replace(/\s/g,'')
  return str.split('').filter(letter => vowelLetters.includes(letter)).length
}

// console.log(findVowels1("42 is the answer."))

function findVowels2(str) {
  let count = 0
  let vowelLetters = ['a','e','i','o','u']
  for(let char of str.toLowerCase()){
    if(vowelLetters.includes(char)){
      count++
    }
  }
  return count
}

// console.log(findVowels2("42 is the answer."))

function findVowels3(str) {
  const matched = str.match(/[aeiou]/gi)
  return matched ? matched.length : 0
}

// console.log(findVowels3("42 is the answer."))