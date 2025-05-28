import api from './api';

export const getClients = async () => {
    const res = await api.get('/client');
    return res.data;
}

export const getClientById = async (id) => { 
    const res = await api.get(`/client/${id}`); 
    return res.data;
}

export const userLogin = (data) => api.post('/client/login', data);

export const createClient = (data) => api.post('/client', data);

export const updateClient = (id, data) => api.put(`/client/${id}`, data);

export const deleteClient = (id) => api.delete(`/client/${id}`);
