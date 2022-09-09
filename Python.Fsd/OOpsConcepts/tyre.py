class Car:
    cartier_count=0
    def __init__(self, brand, color,year,speed) -> None:
        self.Car_type=brand
        self.Car_color=color
        self.Car_model=year
        self.Car_speed=speed
        self.tier=4
        self.engine=[]
        Car.cartier_count+=1
    def tier(self,factor):
        self.tier=factor
    def addengine(self,obj):
        self.engine.append(obj)
    @classmethod
    def increaseCar(cls):
        cls.cartier_count+=1
    @classmethod
    def createmodel(cls,model):
        return Car("","Unknown",model)
    def printcar():
        print("Something")
    def __str__(self) -> str:
        return f"{self.Car_type}-{self.Car_color}-{self.Car_model}:-{self.Car_speed}"
#obj=Car("Porshe","red","2020","230")
#print(obj)
#array=[]
##for i in range(1):
  #  array.append(Car(input("brand:"), input("color:"), input("year"), input("speed")))
#array[0].addengine(Car("Model","Car"))
#print[array[0].engine[0]]