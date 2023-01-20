const User = ({user,setId}) => {
    const {name, id} = user;
    return (
        <div>
            <p>ID-{id}, name- {name}</p>
            <button onClick={() => setId(id)}>User posts</button>

        </div>
    );
};

export {User};