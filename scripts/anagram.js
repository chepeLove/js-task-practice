  // Задача на анаграмму обычно состоит в проверке, являются ли две строки анаграммами друг друга.
  // Анаграммы - это слова или фразы, которые содержат одинаковые символы,
  // но могут быть переставлены в разном порядке.

  // Примеры использования функции:
  //   anagram("listen", "silent"); // true
  //   anagram("hello", "oLlEh"); // true
  //   anagram("debit card", "bad credit"); // true
  //   anagram("open", "close"); // false

  function anagram1(str1,str2) {
    let newStr1 = str1.toLowerCase().replace(/\s/g,'').split('').sort().join('')
    let newStr2 = str2.toLowerCase().replace(/\s/g,'').split('').sort().join('')

    return newStr1 === newStr2
  }

  // console.log(anagram1("listen", "silent"))
  // console.log(anagram1("hello", "oLlEh")) // true
  // console.log(anagram1("debit card", "bad credit"))
  // console.log(anagram1("open", "close"))
  // console.log(anagram1("friend", "Finder"))

  function buildCharObject(str) {
    const charObj = {}
    str = str.toLowerCase().replace(/[^\w]/g)
    for (let char of str){
      charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
  }

  function anagram2(strA,strB) {

    const aCharObj = buildCharObject(strA)
    const bCharObj = buildCharObject(strB)

    if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
      return false
    }

    for (let char in aCharObj){
      if (aCharObj[char] !== bCharObj[char]){
        return false
      }
    }
    return  true
  }

  console.log(anagram2("debit card", "bad credit"))

  const anagram3 = (str1,str2) => [...str1.toLowerCase()].sort().toString() === [...str2.toLowerCase()].sort().toString()

  console.log(anagram3("hello", "oLlEh"))