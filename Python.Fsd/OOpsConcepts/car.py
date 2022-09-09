class Car:
    def __init__(self, brand, color,year,speed) -> None:
        self.Car_type=brand
        self.Car_color=color
        self.Car_model=year
        self.Car_speed=speed
        

    def __str__(self) -> str:
        return f"{self.Car_type}-{self.Car_color}-{self.Car_model}:-{self.Car_speed}"
obj=Car("Porshe","red","2020","230")
print(obj)
array=[]
for i in range(1):
    array.append(Car(input("brand:"), input("color:"), input("year"), input("speed")))
for Car1 in array:
    print(Car1)