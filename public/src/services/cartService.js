import api from './api';

export const getCarts = () => api.get('/cart');

export const getCartById = (id) => api.get(`/cart/${id}`);

export const createCart = (data) => api.post('/cart', data);

export const updateCart = (id, data) => api.put(`/cart/${id}`, data);

export const deleteCart = (id) => api.delete(`/cart/${id}`);
