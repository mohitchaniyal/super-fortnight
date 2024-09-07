from pydantic import BaseModel,Field,EmailStr
from typing import Optional

class Users(BaseModel):
    email: EmailStr
    password: str
    phone_number:str
    country:str
    customer_type:str
    company_name: Optional[str] = None 

class UsersResp(BaseModel):
    id :int 
    email: EmailStr
    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token:str
    token_type:str

class TokenData(BaseModel):
    id: Optional[int]=None
