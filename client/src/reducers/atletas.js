import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (atletas = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return atletas.map((atleta) => (atleta._id === action.payload._id ? action.payload : atleta));
    case CREATE:
      return [...atletas, action.payload];
    case UPDATE:
      return atletas.map((atleta) => (atleta._id === action.payload._id ? action.payload : atleta));
    case DELETE:
      return atletas.filter((atleta) => atleta._id !== action.payload);
    default:
      return atletas;
  }
};

