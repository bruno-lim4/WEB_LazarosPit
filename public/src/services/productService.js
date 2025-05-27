import api from './api';

export const getProducts = () => api.get('/product');

export const getProductById = (id) => api.get(`/product/id/${id}`);

export const getProductsByTag = (tag) => api.get(`/product/tag/${tag}`);

export const createProduct = (data) => api.post('/product', data);

export const updateProduct = (id, data) => api.put(`/product/${id}`, data);

export const deleteProduct = (id) => api.delete(`/product/${id}`);
