from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.resume import router as resume_router

app = FastAPI()
app.include_router(resume_router)
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

@app.get("/")
async def return_data():
    return {"message":"hi it works "}