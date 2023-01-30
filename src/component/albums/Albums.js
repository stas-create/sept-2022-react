import {useEffect, useState} from "react";

import {albumService} from "../../services";
import {Album} from "../album/Album";
import css from './Albums.module.css';

const Albums = () => {
    let [albums,setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAll().then(({data}) => setAlbums([...data]));
    }, []);
    return (

        <div className={css.Album}>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};