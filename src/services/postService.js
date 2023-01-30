import {axiosService} from "./axiosService";
import {urls} from "../config";

const postService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {
    postService
}