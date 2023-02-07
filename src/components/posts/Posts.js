import {Component} from "react";

import {postService} from "../../services";
import {Post} from "../post/Post";
import css from './Posts.module.css'


class Posts extends Component{
    constructor(props) {
        super(props);
        this.state={posts:[]}
    }

    componentDidMount() {
        postService.getAll().then(({data})=>this.setState(({posts: data})))
    }

    render() {
        return(
            <div>
                <h1>Posts</h1>
                <div className={css.Posts}>
                    {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
                </div>
            </div>

    )
    }
}

export {Posts};

