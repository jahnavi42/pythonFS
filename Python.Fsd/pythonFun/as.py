# make a greeting func that excepts name and message to greet
def greet(name="jahnavi", message="How are you ?"):
    return f"Hello {name}, {message}"


def product(op="-", a=3, b=4):
    if op == "+":
        return f"{a} + {b} = {a+b}"
    elif op == "-":
        return f"{a}-{b}={a-b}"
    elif op== "*":
        return f"{a}*{b}={a*b}"
    elif op== "/":
        return f"{a}/{b}={a/b}"


def performoperation(name, operation, values=[3, 9]):
    return f" {greet(name)}. {name} is performing {operation(a=values[0], b=values[1])})"


print(performoperation("jahnavi", product))
