
from flask import Flask, request
app=Flask(__name__)


@app.route("/",methods=["POST"])
def home():
    reqObj=request.get_json()
    print(request.get_json())
    return "hello"
@app.route("/home")
def homenew():
    return "hello world"
@app.route("/hello")
def home1():

    return "hello this is python"

app.run(debug=True,port=5000)