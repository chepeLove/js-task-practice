//Как найти два числа в массиве, которые вместе дадут заданную сумму?

const sumOfTwo = (arr, target) => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === target){
        result.push(arr[i])
        result.push(arr[j])
      }
    }
  }

  return result
}

// console.log(sumOfTwo([2, 7, 11, 15], 9))
// console.log(sumOfTwo([2, 7, 11, 15], 22))


const sumOfTwo2 = (arr, target) => {
  const numObject = {}

  for (let i = 0; i < arr.length; i++) {
    numObject[arr[i]] = i
  }
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if(numObject[diff] && numObject[diff] !== i){
      return [i,numObject[diff]]
    }
  }
  return []
}

console.log(sumOfTwo2([2, 7, 11, 15], 14))