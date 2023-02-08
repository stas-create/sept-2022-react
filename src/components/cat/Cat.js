const Cat = ({cat,dispatch}) => {
    return (
        <div>
            <div>Id-{cat.idCat}</div>
            <div>Name-{cat.name}</div>
            <button onClick={()=>dispatch({type:'DELETECAT',payload:cat.idCat})}>Delete cat</button>
        </div>
    );
};

export {Cat};