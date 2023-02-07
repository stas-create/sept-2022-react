import {Component} from "react";

import css from './Post.module.css'

class Post extends Component{
    constructor(post) {
        super(post);
    }

    render() {
        return(
            <div className={css.Post}>
                <p>userId - {this.props.post.userId}</p>
                <p>id - {this.props.post.id}</p>
                <p>title - {this.props.post.title}</p>
                <p>body - {this.props.post.body}</p>
            </div>
        )
    }
}

export {
    Post
}