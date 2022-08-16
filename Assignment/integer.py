#Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value 
#to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. Assume the 
#environment does not allow you to store 64-bit integers (signed or unsigned).
MAX = 2147483647
MIN = -2147483648
def reversDigits(num):
    rev = 0
    while(num > 0):   
        rem = num % 10
        num = (num//10)
        if(rev > MAX/10 or rev == MAX/10 and rem > 7):
            return 0
        if(rev < MIN/10 or rev == MIN/10 and rem < -8):
            return 0
        rev = rev*10 + rem
     
    return rev
 
num = 16778
print(f"Reverse of no. is {reversDigits(num)}")
num = 12345678
print(f"Reverse of no. is {reversDigits(num)}")