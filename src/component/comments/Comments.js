import {useEffect, useState} from "react";

import {commentService} from "../../services";
import {Comment} from "../comment/Comment";
import css from './Comments.module.css';

const Comments = () => {
    let [comments,setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments([...data]));
    }, []);

    return (

        <div className={css.Comments}>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};