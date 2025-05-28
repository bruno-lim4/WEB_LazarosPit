import api from './api';

export const getTags = async () => {
    const res = await api.get('/tag');
    return res.data;
};

export const createTag = (data) => api.post('/tag', data);