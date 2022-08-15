
n = 5
for i in range(n):
   for j in range(n-i-1):
      print(" ", end=" ")
   for j in range(2*i+1):
      print("*", end=" ")
   print()
for i in range(n-1):
   for j in range(i+1):  
      print(" ", end=" ")
   for j in range(2*(n-i-1)-1): 
      print("*", end=" ")
   print()
def greetUser(user="jahnavi", message="Hello, how are you."):
    return f"{user} #{message}"


def perform(function=, title="Something"):
    print(greetUser(title))
    function(5)


def anotherOperation(val):
    print(f"I have Number{val}")


perform(anotherOperation, "Operation")