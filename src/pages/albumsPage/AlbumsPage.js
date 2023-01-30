import {Albums} from "../../component";
import css from './AlbumsPage.module.css';

const AlbumsPage = () => {
    return (
        <div className={css.AlbumsPage}>
            <h2>All albums</h2>
            <Albums/>
        </div>
    );
};

export {AlbumsPage};