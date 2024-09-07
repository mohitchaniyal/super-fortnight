from database import Base
from sqlalchemy import Column,Integer,String,Boolean,ForeignKey
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"
    id = Column(Integer,primary_key=True,nullable=False,autoincrement=True)
    email = Column(String,nullable=False,unique=True)
    password = Column(String,nullable=False)
    phone_number = Column(String,nullable=False)
    country = Column(String,nullable=False)
    customer_type = Column(String,nullable=False)
    company_name = Column(String,nullable=True)
    created_at = Column(TIMESTAMP(timezone=True),server_default=text('now()'))
