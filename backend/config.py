from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_HOSTNAME: str
    DATABASE_PORT: int
    DATABASE_PASSWORD: str 
    DATABASE_NAME: str
    DATABASE_USERNAME: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    SECRET_KEY: str 
    
    class Config:
        env_file = ".env"

settings=Settings()