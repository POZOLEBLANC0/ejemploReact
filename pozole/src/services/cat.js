import axios from 'axios';

const cat = axios.create({
    baseURL: import.meta.env.VITE_CATEGORIES_URL ,
    headers: {
        'Content-Type': 'application/json',
    },
});

if (!cat.defaults.baseURL) {
    cat.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    console.warn('VITE_CATEGORIES_URL no definido — usando fallback:', cat.defaults.baseURL);
}

export default cat;