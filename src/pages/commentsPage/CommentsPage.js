import {Comments} from "../../component";
import {Outlet} from "react-router-dom";
import css from './CommentsPage.module.css';

const CommentsPage = () => {
    return (
        <div className={css.box}>
            <h2>All comments</h2>
            <div className={css.CommentsPage}>
                <Comments/>
                <Outlet/>

            </div>
        </div>
    );
};

export {CommentsPage};