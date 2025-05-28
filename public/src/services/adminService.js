import api from './api';

export const getAdmins = async () => 
{ 
    const res = await api.get('/admin');
    return res.data;
}

export const getAdminById = async (id) => 
{ 
    const res = await api.get(`/admin/${id}`);
    return res.data;
}

export const createAdmin = (data) => api.post('/admin', data);

export const updateAdmin = (id, data) => api.put(`/admin/${id}`, data);

export const deleteAdmin = (id) => api.delete(`/admin/${id}`);
