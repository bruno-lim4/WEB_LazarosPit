import api from './api';

export const getCarts = async () => {
    const res = await api.get('/cart');
    return res.data;
}

export const getCartById = async (id) => { 
    const res = await api.get(`/cart/${id}`);
    return res.data;
}

export const getCartsByUserId = async (id) => { 
    const res = await api.get(`/cart/user/${id}`);
    return res.data;
}

export const createCart = (data) => api.post('/cart', data);

export const updateCart = (id, data) => api.put(`/cart/${id}`, data);

export const deleteCart = (id) => api.delete(`/cart/${id}`);
