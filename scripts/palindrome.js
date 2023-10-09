// palindrome1('racecar') // true
// palindrome1('table') // false

function palindrome1(str) {
  return str === str.split('').reverse().join('')
}

// console.log(palindrome1('table'))
// console.log(palindrome1('racecar'))

// palindrome2('А роза упала на лапу Азора') // true
// palindrome2('Анна') // true

function palindrome2(str) {
    str = str.toLowerCase().replace(/\s/g,'')
  return str === str.split('').reverse().join('')
}

// console.log(palindrome2('А роза упала на лапу Азора'))

function palindrome3(str) {
  str = str.toLowerCase().replace(/\s/g,'')
   const len = Math.floor(str.length/2)
  for (let i = 0;i<len;i++){
    return str[i] === str[str.length - i - 1];
  }
}

// console.log(palindrome3('А роза упала на лапу Азора'))