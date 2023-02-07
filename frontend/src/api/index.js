import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACK_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchProject = (id) => API.get(`/projects/${id}`);
export const fetchProjects = (page) => API.get(`/projects?page=${page}`);
export const fetchProjectsByCreator = (name) => API.get(`/projects/creator?name=${name}`);
export const fetchProjectsBySearch = (searchQuery) => API.get(`/projects/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createProject = (newProject) => API.post('/projects', newProject);
export const updateProject = (id, updatedProject) => API.patch(`/projects/${id}`, updatedProject);
export const deleteProject = (id) => API.delete(`/projects/${id}`);
export const likeProject = (id) => API.patch(`/projects/${id}/like-crypto-project`);
export const commentProject = (value, id) => API.post(`/projects/${id}/comment-crypto-project`, { value });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
