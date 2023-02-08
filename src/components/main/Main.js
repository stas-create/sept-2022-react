import {useReducer, useRef} from "react";

import {Dogs} from "../dogs/Dogs";
import {Cats} from "../cats/Cats";
import css from './Main.module.css'

const Main = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADDDOG':
                const sliceDog = state.dogs.slice(-1);
                const idDog = sliceDog.length ? sliceDog[0].idDog + 1 : 0;
                return {...state, dogs: [...state.dogs, {idDog ,name: action.payload}]};
            case 'ADDCAT':
                const sliceCat = state.cats.slice(-1);
                const idCat = sliceCat.length ? sliceCat[0].idCat + 1 : 0;
                return {...state, cats: [...state.cats, {idCat,name: action.payload}]};
            case 'DELETEDOG':
                const indexDog = state.dogs.findIndex(value => value.idDog === action.payload);
                state.dogs.splice(indexDog, 1)
                return {...state}
            case 'DELETECAT':
                const indexCat = state.cats.findIndex(value => value.idCat === action.payload);
                state.cats.splice(indexCat, 1)
                return {...state}
            default:
                return state
        }
    };


    const initValue = () => (
        {cats: [], dogs:[]}
    );

    const dog = useRef();

    const cat = useRef();

    const [state,dispatch] = useReducer(reducer,null,initValue);

    return (
        <div>
            <div>
                <input type="text" placeholder={'dog'} ref={dog}/>
                <button onClick={() => dispatch({type: 'ADDDOG', payload: dog.current.value})}>add dog</button>
                <input type="text" placeholder={'cat'} ref={cat}/>
                <button onClick={() => dispatch({type: 'ADDCAT', payload: cat.current.value})}>add cat</button>
            </div>

            <div className={css.Pets}>
                <Dogs key={state.dogs.index} dogs={state.dogs} dispatch={dispatch}/>
                <Cats key={state.cats.index} cats={state.cats} dispatch={dispatch}/>
            </div>


        </div>
    );
};

export {Main};