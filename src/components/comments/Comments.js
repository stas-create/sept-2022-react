import {Component} from "react";

import {commentService} from "../../services";
import {Comment} from "../comment/Comment";
import css from './Comments.module.css'

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state={comments:[]}
    }

    componentDidMount() {
        commentService.getAll().then(({data})=>this.setState(({comments: data})))
    }

    render() {
        return (

            <div>
                <h1>Comments</h1>
                <div className={css.Comments}>
                    {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </div>
            </div>
        );
    }
}

export {Comments}