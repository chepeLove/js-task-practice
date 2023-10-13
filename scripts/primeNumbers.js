//Как найти простое число + Как найти все простые числа до N | Перебор и Решето Эратосфена
//Простое число - это натуральное число, большее единицы, которое имеет только два делителя: единицу и само себя.
// Другими словами, простое число не делится на другие натуральные числа,
// кроме единицы и самого себя, без остатка. Например, числа 2, 3, 5, 7, 11 и т. д.
// являются простыми числами, так как они не имеют делителей, кроме 1 и самих себя.

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

function getPrime(num) {
  const primes = []

  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  return primes
}

console.log(getPrime(100))

//Перебор и Решето Эратосфена

function getPrimes1(num) {
  const seive = []
  const primes = []

  for (let i = 2; i <= num; i++) {
    if (!seive[i]) {
      primes.push(i)
      for (let j = i * i; j <= num; j += i) {
        seive[j] = true
      }
    }
  }

  return primes
}