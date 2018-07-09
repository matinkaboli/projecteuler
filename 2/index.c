#include <stdio.h>

int is_even(int n) {
    if (n % 2 == 0) {
        return 1;
    }
    return 0;
}

int main() {
    int fs = 1;
    int sc = 2;
    long sum = 0;

    while(fs < 4000000) {
        if (is_even(fs)) { sum += fs; }
        int new_number = fs + sc;
        fs = sc;
        sc = new_number;
    }
    printf("%ld\n", sum);
}
