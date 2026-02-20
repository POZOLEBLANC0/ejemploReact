import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fallback para desarrollo local si VITE_API_URL no está definido
if (!api.defaults.baseURL) {
    api.defaults.baseURL = 'https://fakestoreapi.com/';
    console.warn('VITE_API_URL no definido — usando fallback:', api.defaults.baseURL);
}

export default api;