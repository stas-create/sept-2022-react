const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div>userId - {userId} <br/> Id - {id} <br/> Tittle - {title} <br/>Body - {body}</div>
        </div>
    );
};

export {Post};