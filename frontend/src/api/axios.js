import axios from 'axios';

const api = axios.create({
    // Sesuaikan sama URL backend Laravel lu
    baseURL: 'http://localhost:8000/api', 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;