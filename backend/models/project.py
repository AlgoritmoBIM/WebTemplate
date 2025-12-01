"""Models module - Database models and schemas"""
from pydantic import BaseModel

class ProjectBase(BaseModel):
    """Base project model"""
    name: str
    description: str

class ProjectResponse(ProjectBase):
    """Project response model"""
    id: int
    
    class Config:
        from_attributes = True
