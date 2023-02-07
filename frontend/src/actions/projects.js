import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_PROJECT, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, COMMENT, FETCH_BY_CREATOR } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchProject(id);

    dispatch({ type: FETCH_PROJECT, payload: { project: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getProjects = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, numberOfPages }
    } = await api.fetchProjects(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getProjectsByCreator = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data }
    } = await api.fetchProjectsByCreator(name);

    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getProjectsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data }
    } = await api.fetchProjectsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (project, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createProject(project);

    dispatch({ type: CREATE, payload: data });

    // history.push(`/project/${data._id}`);
    history.push(`/projects`);
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: UPDATE, payload: project });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeProject = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likeProject(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentProject = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentProject(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
