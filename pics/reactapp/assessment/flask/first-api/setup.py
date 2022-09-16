#1
num=[11, -2, -63, 56, 75, -6, -86, -3, -463]
num1 = list(filter(lambda x: True 
if x<0 else False,  num))
num2 = list(filter(lambda x: True 
if x>0 else False,  num))
print(num1)
print(num2)
#2
even = [7, 5, 6, 9, 12, 48, 76, 35]
even1 = [45, 25, 34, 75, 32, 76, 15]
even2 = list(filter(lambda x: x % 2 == 0, even))
odd= list(filter(lambda x: x % 2 != 0, even))
print(even2)
print(odd)