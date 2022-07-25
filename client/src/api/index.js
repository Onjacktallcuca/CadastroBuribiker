import axios from 'axios';

const url = 'http://localhost:5000/atletas/';


export const fetchAtleta = () => axios.get(url);
export const createAtleta = (newAtleta) => axios.post(url, newAtleta);
export const likeAtletas = (id) => axios.patch(`${url}/${id}/likeAtleta`);
export const updateAtleta = (id, updatedAtleta) => axios.patch(`${url}/${id}`, updatedAtleta);
export const deleteAtleta = (id) => axios.delete(`${url}/${id}`);
