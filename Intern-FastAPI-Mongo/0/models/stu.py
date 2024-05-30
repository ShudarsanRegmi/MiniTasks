from pydantic import BaseModel

class Stu(BaseModel):
    sno: int
    fname: str
    lname: str
    email: str