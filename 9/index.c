#include <stdio.h>

int pythagorean(int num) {
    for (int i = 1; i < num; i++) {
        for (int j = 1; j < num - 1; j++) {
            const int k = num - i - j;
            if ((i * i) + (j * j) == (k * k)) {
                return i * j * k;
            }
        }
    }

    return 0;
}

int main() {
    printf("%d\n", pythagorean(1000));
}
