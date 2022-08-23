from typing import List
from typing import List
def largeContSum(arr: List[int])->int:
    n=len(arr)
    preArr=[0]+(n+1)
    for i in range(1,n+1):
        preArr[i]=preArr[i-1]+arr[i-1]
    minPreSum=0
    sol=arr[0]
    for i in range[1,n-1]:
        sol=max(sol,preArr[i]-minPreSum)
        minPreSum=min(minPreSum,preArr[i])
    return sol
