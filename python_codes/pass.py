from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str

@app.post("/login")
async def register_user(user: User):
    # Here, I still need to implement code to store the user information in MongoDB
    # For demo purposes, i am just returnin the user data FOR NOW!
    return user

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
