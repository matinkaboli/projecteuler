#include <stdio.h>

int checkNumbers(int n) {
  if (n % 3 == 0 ||  n % 5 == 0) {
    return 1;
  }
  return 0;
}

int main() {
  long sum = 0;
  for (int i = 0; i < 1000000; i++) {
    if (checkNumbers(i)) sum += i;
  }
  printf("%ld\n", sum);
}
