from fastapi import FastAPI
from routes.stu import stu


app = FastAPI()
app.include_router(stu)