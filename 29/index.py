combinations = []

for i in range(2, 101):
    for j in range(2, 101):
        p = i ** j

        if p not in combinations:
            combinations.append(p)


print(len(combinations))
