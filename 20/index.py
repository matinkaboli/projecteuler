def fac(n):
    product = 1;
    for i in range(1, n + 1):
        product *= i
    return product

def sumLen(n):
    return sum(list(map(int, list(str(n)))))

print(sumLen(fac(100)))
