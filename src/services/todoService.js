import {axiosService} from "./axiosService";

import {urls} from "../config";

const todoService ={
    getAll: () => axiosService.get(urls.todos)
}

export {
    todoService
};