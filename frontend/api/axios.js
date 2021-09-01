import axios from 'axios';


console.log(process.env.BACKEND_API);

export const API = axios.create({ 
    baseURL:process.env.BACKEND_API,
    headers:{
        "Access-Control-Allow-Origin":"*"
    }
});

