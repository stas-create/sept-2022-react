import {Cat} from "../cat/Cat";

const Cats = ({cats,dispatch}) => {
    return (
        <div>
            <h2>Cats</h2>
            <div>
                {cats.map(cat=><Cat key={cat.idCat} cat={cat} dispatch={dispatch}/>)}
            </div>
        </div>
    );
};

export {Cats};