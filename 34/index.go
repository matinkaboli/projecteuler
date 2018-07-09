package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	sum := 0

	for i := 3; i < 2540161; i++ {
		if facEqual(i) {
			sum += i
		}
	}

	fmt.Println(sum)
}

func factorial(num int) int {
	if num <= 1 {
		return 1
	}

	return num * factorial(num-1)
}

func facEqual(num int) bool {
	str := strconv.Itoa(num)
	arr := strings.Split(str, "")
	sum := 0

	for _, v := range arr {
		i, err := strconv.Atoi(v)

		if err != nil {
			os.Exit(1)
		}

		sum += factorial(i)
	}

	if num == sum {
		return true
	}

	return false
}
