from pymongo import MongoClient

CONN_STR = "mongodb+srv://shudarsanregmi555:8NIL2HpKyjIFV886@cluster0.itxsxey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(CONN_STR)
