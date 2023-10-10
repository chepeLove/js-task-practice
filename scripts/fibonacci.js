//   Напишите функцию, которая принимает на вход число n и возвращает n-ное число Фибоначчи.
//   Числа Фибоначчи определяются следующим образом: первое и второе числа равны 1,
//   а каждое последующее число равно сумме двух предыдущих чисел.
//   То есть последовательность начинается так: 1, 1, 2, 3, 5, 8, 13 и так далее.
//
//   Примеры:
//
// fibonacci(1) // Возвращает 1
// fibonacci(2) // Возвращает 1
// fibonacci(5) // Возвращает 5
// fibonacci(10) // Возвращает 55


// function fibonacci1(num) {
//   const result = [0,1]
//
//   for (let i=2;i<=num;i++){
//     const prevNum1 = result[i-1]
//     const prevNum2 = result[i-2]
//     result.push(prevNum1 + prevNum2)
//   }
//
//   return result[num]
// }


function fibonacci1Short(num) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= num; i++) {
    let c = a + b
    a = b
    b = c
    // [a,b] = [b,a+b]
  }
  return b
}

console.log(fibonacci1Short(10))


function fibonacci2(n) {
  if (n < 2) {
    return n
  } else {
    return fibonacci2(n - 1) + fibonacci2(n - 2)
  }
}

console.log(fibonacci2(10))