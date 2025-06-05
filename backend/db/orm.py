from sqlalchemy.orm import Session
from db.db_model import Requirements, GetInTouch, engine
from sqlalchemy.orm import sessionmaker,Session


session = sessionmaker(bind=engine)

def add_requirements_form(session:Session, requirements:Requirements) -> Requirements | None:
    
    try:
        #later add limitation to one form per email
        session.add(requirements)
        session.commit()
        session.refresh(requirements)
        return requirements
    except:
        print("Error while adding requirements form to db")
        session.rollback()
    
def add_get_in_touch_form(session:Session, form:GetInTouch) -> GetInTouch| None:

    try:
        session.add(form)
        session.commit()
        session.refresh(form)
        return form
    except:
        print("Error while adding Get in touch form to db")

    