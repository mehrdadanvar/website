from fastapi import APIRouter
from pydantic import BaseModel
from db import schools_collection
router = APIRouter()




class School(BaseModel):
    name:str
    location:str
    dates:str
    major:str
    grade:str
    remarks:str
    level:str




@router.get("/resume/schools")
async def read_schools():
    raw_schools = schools_collection.find()
    schools =[] 
    for x in raw_schools:
        inter = School(**x).dict() 
        schools.append(inter)

    return {"message":schools}