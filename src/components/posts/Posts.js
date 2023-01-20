import {useEffect, useState} from "react";
import {axiosInstance} from "../../services/axiosServices";
import {Post} from "../post/Post";
import {PostDetails} from "../postDetails/PostDetails";

const Posts = () => {
const [post,setPost] = useState([]);
const [postDetails,setPostDetails] = useState(null);
useEffect(()=>{
    axiosInstance.get('/posts').then(value => value.data).then(value => setPost([...value]));
},[])

    return (
        <div>
            <h2>Posts</h2>
            <h3>Post info:</h3>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            <hr/>
            {post && post.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};

export {Posts};