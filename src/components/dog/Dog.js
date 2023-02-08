const Dog = ({dog,dispatch}) => {
    return (
        <div>
            <div>Id-{dog.idDog}</div>
            <div>Name-{dog.name}</div>
            <button onClick={()=>dispatch({type:'DELETEDOG',payload:dog.idDog})}>Delete</button>
        </div>
    );
};

export {Dog};