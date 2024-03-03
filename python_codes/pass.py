from fastapi import FastAPI
# from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
collection = db["users"]

@app.post("/login")
async def register_user(user: User):
    # Store the user information in MongoDB
    user_data = {
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
        "password": user.password
    }
    collection.insert_one(user_data)

    # For demo purposes, we'll just return the user data
    return user

    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
