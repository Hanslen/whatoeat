import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://whatoeat-46f95.firebaseio.com/'
});
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;