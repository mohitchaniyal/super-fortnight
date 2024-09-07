from fastapi import FastAPI
import models
from database import engine
from routers import users,auth
from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=engine)
origins = [
    "http://localhost",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(auth.router)



