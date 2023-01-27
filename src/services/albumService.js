import {axiosService} from "./axiosService";

import {urls} from "../config";

const albumService = {
    getAll: () => axiosService.get(urls.albums)
};
export {
    albumService
};