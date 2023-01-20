import axios from "axios";

const axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com/users'});
const getUsers=()=>{
    return axiosInstance.get();
}

const userService={
    getById: (id) => axiosInstance.get(`/${id}/posts`),
}
export {getUsers, userService};