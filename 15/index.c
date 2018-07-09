#include <stdio.h>

int main() {
    const int grid = 20;
    long ways = 1;
    for (int i = 0; i < grid; i++) {
        ways *= (2 * grid) - i;
        ways /= i + 1;
    }
    printf("%ld\n", ways);
}
