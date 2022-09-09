def maximumArea(arr):
    maximumArea = 0
    for i in range(len(arr)):

        for j in range(i+1, len(arr)):
            temp= j-i
            height = min(arr[i], arr[j])
            result = temp*height
            if result >= maximumArea:
                maximumArea = result
    return maximumArea




arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

print(maximumArea(arr))