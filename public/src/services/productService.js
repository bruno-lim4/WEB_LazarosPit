import api from './api';

export const getProducts = async () => {
  const res = await api.get('/product');
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api.get(`/product/id/${id}`)
  return res.data;
};

export const createProduct = (data) => api.post('/product', data);

export const updateProduct = (id, data) => api.put(`/product/${id}`, data);

export const deleteProduct = (id) => api.delete(`/product/${id}`);
