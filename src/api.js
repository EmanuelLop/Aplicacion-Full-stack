import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const getRegistros = () => axios.get('${API_BASE_URL}/registros');
export const createRegistro = (data) => axios.post('${API_BASE_URL}/registros', data);
export const updateRegistro = (id, data) => axios.put('${API_BASE_URL}/registros/${id}', data);
export const deleteRegistro = (id) => axios.delete('${API_BASE_URL}/registros/${id}');