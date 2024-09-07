from jose import JWTError,jwt
from datetime  import datetime , timedelta
import schemas
# import bcrypt
from fastapi import Depends,status,HTTPException
from fastapi.security import OAuth2PasswordBearer
from config import settings

oauth2_schema = OAuth2PasswordBearer(tokenUrl='/ideaapp/api/v1/login')
SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES

def create_access_token(data:dict):
    to_encode = data.copy()
    expire = datetime.utcnow()+ timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp":expire})
    encoded_jwt = jwt.encode(to_encode,SECRET_KEY,algorithm=ALGORITHM)
    return encoded_jwt

def varify_access_token(token:str,credentials_exception):
    try:
        payload=jwt.decode(token,SECRET_KEY,algorithms=ALGORITHM)
        id:str = payload.get("id")
        print("*"*20)
        print(id)
        print("*"*20)
        if id is None:
            return credentials_exception
        token_data = schemas.TokenData(id=id)
    except JWTError as e:
        print(e)
        raise credentials_exception
    
    return token_data

def get_current_user(token: str = Depends(oauth2_schema)):
    credential_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="could not validate credentials",headers={"WWW-Authenticate":"Bearer"})
    return varify_access_token(token,credential_exception)





