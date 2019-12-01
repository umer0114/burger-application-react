import axios from 'axios';

console.log(axios);


const instance = axios.create({
    baseURL: 'https://react-my-burger-a8df1.firebaseio.com/'
});

export default instance;