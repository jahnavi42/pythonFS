import mysql.connector
myDb=mysql.connector.connect(host="127.0.0.1", user="root",
password="Januravi962k1@",database="sql_store")
myCursor=myDb.cursor()
#selectCommand="SELECT first_name, last_name FROM orders o JOIN customers c ON o.cutomer_id=c.customer_id"
#selectCommand="CREATE TABLE app-users(id int, username text, password text)"
appUser=(1,"jahnavi","abc")
insertQuery="INSERT INTO appUsers VALUES (%s %s %s)"
myCursor.execute(insertQuery,appUser)
#result=myCursor.fetchall()
#for row in result:
   # print(f"{row[0]}{row[1]}")
myDb.commit()
myDb.close()