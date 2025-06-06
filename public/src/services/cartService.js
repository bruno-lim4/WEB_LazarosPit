import api from './api';
import { getToken } from '@/utils/auth'; 

export const getCarts = async () => {
    const res = await api.get('/cart');
    return res.data;
}

export const getCartById = async (id) => {
    const res = await api.get(`/cart/${id}`);
    return res.data;
}

export const getByClient = async (id) => {
    const res = await api.get(`/cart/client/${id}`);
    return res.data;
}

export const addToCart = async (data) => {
    const token = getToken();
    return await api.post('/cart/add', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export const setProductQuantity = async (data) => {
    const token = getToken();
    return await api.post('/cart/set', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export const removeProductFromCart = async (productId) => {
    const token = getToken();
    return await api.post('/cart/remove', { productId }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  };
    

export const createCart = (data) => api.post('/cart', data);

export const updateCart = (id, data) => api.put(`/cart/${id}`, data);

export const deleteCart = (id) => api.delete(`/cart/${id}`);
