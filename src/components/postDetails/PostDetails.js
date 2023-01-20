const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;
    return (
        <div>
            <p>User id={userId} <br/> Post id={id} <br/> Title={title} <br/>Body post ={body}</p>
        </div>
    );
};

export {PostDetails};