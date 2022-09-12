import mysql.connector
myDb=mysql.connector.connect(host="127.0.0.1", user="root",
password="Januravi962k1@",database="sql_store")
myCursor=myDb.cursor()
selectCommand="SELECT * FROM customers"
myCursor.execute(selectCommand)
result=myCursor.fetchall()
for row in result:
    print(row)
myDb.commit()
myDb.close()