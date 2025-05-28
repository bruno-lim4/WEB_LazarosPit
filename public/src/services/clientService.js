import api from './api';

export const getClients = () => api.get('/client');

export const getClientById = (id) => api.get(`/client/${id}`);

export const userLogin = (data) => api.post('/client/login', data);

export const createClient = (data) => api.post('/client', data);

export const updateClient = (id, data) => api.put(`/client/${id}`, data);

export const deleteClient = (id) => api.delete(`/client/${id}`);
