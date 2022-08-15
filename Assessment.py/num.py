arr = []
N = int(input("Number of Elements :"))
target = int(input("Target: "))
sum = 0
for i in range(0,N):
    x=int(input())
    arr.append(x)
for i in range(len(arr)+1):
    for j in range(i+1,len(arr)+1):
        sum = arr[i]+arr[j]
        if sum == target:
            print("a:",i,j)
            break
