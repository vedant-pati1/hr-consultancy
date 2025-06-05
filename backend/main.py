import os
from typing import Annotated

from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from .form_model import GetInTouchForm,RequirementsForm
from .db.orm import add_get_in_touch_form, add_requirements_form,session, GetInTouch, Requirements

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
    try:
        with session() as db_session:
            form = add_get_in_touch_form(db_session, GetInTouch(**body.model_dump()))
            if form:
                return {"message": "Form submitted successfully", "form_id": form.id}
            else:
                return {"message": "Error submitting form"}
    except:
        return {"message": "Error while adding data to db"}
    


@app.post("/api/form/requirements")
async def contact(body:Annotated[RequirementsForm, Body()]):
    try:
        with session() as db_session:
            form = add_requirements_form(db_session,Requirements(**body.model_dump()))
            if form:
                return {"message": "Form submitted successfully", "form_id": form.id}
            else:
                return {"message": "Error submitting form"}
    except:
        return {"message": "Error while adding data to db"}

@app.get('/health')
async def health_check():
    return {'message':"Backend is online"}
