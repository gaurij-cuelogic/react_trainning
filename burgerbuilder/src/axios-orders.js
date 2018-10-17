import axios from 'axios';

const instance = axios.create({
    baseURL : "https://shantanu-sburgerbuilder.firebaseio.com/"
});

export default instance;