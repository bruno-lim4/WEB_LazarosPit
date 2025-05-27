import api from './api';

export const getTags = () => api.get('/tag/');
