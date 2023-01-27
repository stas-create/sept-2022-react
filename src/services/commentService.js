import {axiosService} from "./axiosService";

import {urls} from "../config";

const commentService = {
    getAll: () => axiosService.get(urls.comments)
};

export {
    commentService
};