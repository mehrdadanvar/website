import os
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()
db_connection = os.getenv("MONGO_URI")
print(db_connection)
client = MongoClient(db_connection)
print(client)


database = client["port"]
schools_collection = database["schools"]
print(schools_collection)