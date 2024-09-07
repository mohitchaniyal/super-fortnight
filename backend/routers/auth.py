from fastapi import APIRouter,Depends,status,HTTPException,Response
from sqlalchemy.orm import Session
from database import get_db
import models,schemas,utils,oauth2
from fastapi.security import OAuth2PasswordRequestForm
router = APIRouter(tags = ['Authentication'],prefix="/app/api/v1")

@router.post("/login",response_model=schemas.Token)
def login(user_creadential:OAuth2PasswordRequestForm=Depends(),db:Session=Depends(get_db)):
    user = db.query(models.User).filter(models.User.email==user_creadential.email).first()
    if not user :
       raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="Invalid Creadentials")
    if not utils.varify(user_creadential.password,user.password):
       raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="Invalid Creadentials")
    
    access_token = oauth2.create_access_token(data = {"id": user.id})
    return {"access_token":access_token,"token_type":"bearer"}
