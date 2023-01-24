import {PostForm, Posts, UserForm, Users} from "./components";
import {postsService, usersService} from "./services";

import {useEffect, useState} from "react";



const App = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        usersService.getAll().then(({data}) => setUsers([...data]));
    },[])

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        postsService.getAll().then(({data}) => setPosts([...data]));
    },[])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
            <hr/>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {App};