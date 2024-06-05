from fastapi import APIRouter


from models.stu import Stu

from config.db import client

from schemas.stu import stuEntity, stusEntity
stu = APIRouter()


@stu.post('/' )
async def create_stu(stu: Stu):
    stu = dict(stu)

    # Checking entry with sno exists or not
    if (client.school.stus.find_one({"sno": stu["sno"]})):
        return "Entry already exists"
    
    client.school.stus.insert_one(stu)
    document = client.school.stus.find_one({"sno": stu["sno"]}) 
    return stuEntity(document) if document else "Failed to Insert"

@stu.get('/')
async def fetch_stus():
    document = client.school.stus.find()
    return stusEntity(document) if document else "No results found"

# Endpoint to fetch a specific record
@stu.get('/{sno}')
async def fetch_stu(sno: int):
    document = client.school.stus.find_one({"sno":sno})
    return stuEntity(document) if document else "No results found"

# Endpoint to update a specific record
@stu.put('/{sno}')
async def update_stu(sno: int, stu:Stu):
    stu = dict(stu)
    #check if the updated user sno doesn't collide with others
    if client.school.stus.find_one({"sno": sno}):
        # stu exist
        if client.school.stus.find_one({"sno": stu["sno"]}):
            return "Student Already exists with sno {}".format(stu["sno"])
    else:
        return "Entry not found with sno: {}".format(sno)
        
    
    document = client.school.stus.find_one_and_update({"sno":sno}, {"$set": stu}, return_document=True)
    return stuEntity(document) if document else "Failed to update"

# Endpoint to delte a specific record
@stu.delete('/{sno}')
async def delete_stu(sno: int):
    existing_student = client.school.stus.find_one({"sno": sno})

    if existing_student:
        result = client.school.stus.delete_one({"sno": sno})
        
        if result.deleted_count == 1:
            return "studnet with sno {} deleted successfully".format(sno)
        else:
            return "Failed to delete student with sno {}".format(sno)
    else:
        return "User with sno {} does not exist".format(sno)
