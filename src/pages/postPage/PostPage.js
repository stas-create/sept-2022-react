import {useParams} from "react-router-dom";

import {PostDetails} from "../../component";

const PostPage = () => {
    const {postId} = useParams();


    return (
        <div>
            <PostDetails postId={postId}/>
        </div>
    );
};

export {PostPage};