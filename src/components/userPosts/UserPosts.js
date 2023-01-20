const UserPosts = ({post}) => {
    const {userId,id,title,body}=post
    return (
        <div>
            <div>
                User id - {userId} <br/> Id Post - {id} <br/> Title - {title} <br/> Body Post - {body}

            </div>
        </div>
    );
};

export {UserPosts};