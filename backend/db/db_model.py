import os

from sqlalchemy import Column, Integer, String,ARRAY, create_engine
from sqlalchemy.orm import declarative_base, DeclarativeBase
from dotenv import load_dotenv

load_dotenv()

engine  = create_engine(os.getenv("SQL_DATABASE_URL"),echo=True) 
Base : DeclarativeBase = declarative_base()

class Requirements(Base):
    __tablename__ = 'requirements_form'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    company = Column(String, nullable=False)
    email = Column(String, nullable=False)
    location = Column(String, nullable=False)
    name = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    requirements = Column(String, nullable=True)
    service = Column(ARRAY(String(50),zero_indexes=True), nullable=False)  

class GetInTouch(Base):
    __tablename__ = 'get_in_touch_form'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone_number = Column(String, nullable=True)
    message = Column(String, nullable=True)

Base.metadata.create_all(engine)