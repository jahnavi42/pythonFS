# take list of array and iterate over it using for loop and find the compound intrest using func 2yrs
def greet(name="Akshay", message= "How are you ?"):
     return f"Hello {name}, {message}"

def product(a=1, b=4):
     return f"{a} + {b} = {a+b}"

def perfomoperation(name, operation, values=[1, 7]):
    return f" {greet (name)}. {name} is performing {operation(values[0], values [1])})"
print(perfomoperation("kriti", product))