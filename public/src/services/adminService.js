import api from './api';

export const getAdmins = () => api.get('/admin');

export const getAdminById = (id) => api.get(`/admin/${id}`);

export const createAdmin = (data) => api.post('/admin', data);

export const updateAdmin = (id, data) => api.put(`/admin/${id}`, data);

export const deleteAdmin = (id) => api.delete(`/admin/${id}`);
