import {useEffect, useState} from "react";
import {getUsers, userService} from "../../services/users.api.axio";
import {User} from "../user/User";
import {UserPosts} from "../userPosts/UserPosts";

const Users = () => {
    const [user,setUser] = useState([]);
    const [id,setId] = useState(null);
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUser(value.data))
    }, []);
    useEffect(()=>{
        userService.getById(id).then(value => setPosts(value.data));
    },[id])

    return (
        <div>
            <h2 >Users:</h2>
            <hr/>
            {user.map((user, index) => <User key={index} user={user} setId={setId} />)}
            <h4>User posts</h4>
            {posts.map((post,index)=><UserPosts key={index} post={post}/>)}
        </div>
    );
};

export {Users};