from pydantic import BaseModel,EmailStr


class GetInTouchForm(BaseModel):
    name:str
    email:EmailStr
    phone_number:str |None = None
    message: str|None = None

class RequirementsForm(BaseModel):
    company: str
    email: EmailStr
    location: str
    name: str
    phone: str 
    requirements: str | None = None
    service: list[str]


