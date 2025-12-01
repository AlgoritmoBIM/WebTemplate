import apiClient from './apiClient';

export const getProjects = async () => {
  try {
    const response = await apiClient.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getProject = async (projectId) => {
  try {
    const response = await apiClient.get(`/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

export const createProject = async (name, description) => {
  try {
    const response = await apiClient.post('/projects', { name, description });
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};
