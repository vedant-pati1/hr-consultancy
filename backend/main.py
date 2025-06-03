import os
from typing import Annotated

from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from model import GetInTouchForm,RequirementForm

load_dotenv()

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL")],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)


@app.post("/api/form/contact")
async def contact(body:Annotated[GetInTouchForm, Body()]):
    pass


@app.post("/api/form/requirements")
async def contact(body:Annotated[RequirementForm, Body()]):
    pass

@app.get('/health')
async def health_check():
    return {'message':"Backend online"}
