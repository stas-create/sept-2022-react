const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div>
            <div>
                Id-{id} <br/> Name-{name} <br/> username-{username}
            </div>
        </div>
    );
};

export {User};