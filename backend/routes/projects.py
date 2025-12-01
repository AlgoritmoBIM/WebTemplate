"""Routes module - API endpoints"""
from fastapi import APIRouter

router = APIRouter()

@router.get("/projects", tags=["Projects"])
async def list_projects():
    """Get all projects"""
    return {"projects": []}

@router.get("/projects/{project_id}", tags=["Projects"])
async def get_project(project_id: int):
    """Get specific project by ID"""
    return {"id": project_id, "name": "Sample Project"}

@router.post("/projects", tags=["Projects"])
async def create_project(name: str, description: str):
    """Create a new project"""
    return {"id": 1, "name": name, "description": description}
