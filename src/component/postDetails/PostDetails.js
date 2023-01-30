import {useEffect, useState} from "react";

import {postService} from "../../services";
import css from './PostDetails.module.css';

const PostDetails = ({postId}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data));
    }, [postId]);

    return (
        <div className={css.PostDetails}>
            {post&&
                <>
                <p>userId:{post.userId}</p>
                <p>id:{post.id}</p>
                <p>title:{post.title}</p>
                <p>body:{post.body}</p>
                </>
            }
        </div>
    );
};

export {PostDetails};