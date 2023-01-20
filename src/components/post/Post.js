const Post = ({post,setPostDetails}) => {
    const {id, title} = post;
    return (
        <div>
            <div>ID={id} , Title={title}</div>
            <button onClick={() => setPostDetails(post)}>Post info</button>
        </div>
    );
};

export {Post};