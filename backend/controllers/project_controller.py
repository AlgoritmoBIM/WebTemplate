"""Controllers module - Request handling layer"""
from services.project_service import ProjectService

class ProjectController:
    """Project controller for handling project requests"""
    
    @staticmethod
    def get_projects():
        """Controller method to get all projects"""
        return ProjectService.get_all_projects()
    
    @staticmethod
    def get_project(project_id: int):
        """Controller method to get project by ID"""
        return ProjectService.get_project_by_id(project_id)
