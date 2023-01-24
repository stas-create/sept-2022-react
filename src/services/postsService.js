import {axiosService} from "./axiosService";

import {urls} from "../configs";

const postsService={
    getAll: () => axiosService.get(urls.posts),
    create:(newPost)=>axiosService.post(urls.posts,newPost)
}
export {
    postsService
}