package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(sumPrimes(2000000))
}

func isPrime(number int) bool {
	for i := 2; i <= int(math.Ceil(math.Sqrt(float64(number)))); i++ {
		if number%i == 0 {
			return false
		}
	}

	return true
}

func sumPrimes(stop int) int {
	primes := 2

	for i := 2; i < stop; i++ {
		if isPrime(i) {
			primes += i
		}
	}

	return primes
}
