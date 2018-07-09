def divisor(n):
    ds = 0
    for i in range(1, n):
        if (n % i == 0): ds += i
    return ds

sum = 0

for i in range(0, 10000):
    n = divisor(i)
    b = divisor(n)
    if i == b and n != i:
        sum += i

print(sum)
