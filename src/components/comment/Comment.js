import {Component} from "react";

import css from './Comment.module.css'

class Comment extends Component{
    constructor(comment) {
        super(comment);
    }

    render() {
        return(
            <div className={css.Comment}>
                <p>postId - {this.props.comment.postId}</p>
                <p>id - {this.props.comment.id}</p>
                <p>name - {this.props.comment.name}</p>
                <p>email - {this.props.comment.email}</p>
                <p>body - {this.props.comment.body}</p>
            </div>
        )
    }
}

export {Comment};