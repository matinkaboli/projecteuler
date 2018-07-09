names = open('names.txt', 'r')
list_names = sorted(names.read().replace('"', '').split(','))
letters = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
    'K': 11,
    'L': 12,
    'M': 13,
    'N': 14,
    'O': 15,
    'P': 16,
    'Q': 17,
    'R': 18,
    'S': 19,
    'T': 20,
    'U': 21,
    'V': 22,
    'W': 23,
    'X': 24,
    'Y': 25,
    'Z': 26
}
sum = 0
for [i, v] in enumerate(list_names):
    temp = 0
    for j in v:
        temp += letters[j]
    sum += temp * (i + 1)

print(sum)
