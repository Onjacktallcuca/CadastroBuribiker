import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getAtletas = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAtleta();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAtleta = (atleta) => async (dispatch) => {
  try {
    const { data } = await api.createAtleta(atleta);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAtleta = (id, atleta) => async (dispatch) => {
  try {
    const { data } = await api.updateAtleta(id, atleta);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeAtleta = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeAtletas(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAtleta = (id) => async (dispatch) => {
  try {
    await api.deleteAtleta(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
