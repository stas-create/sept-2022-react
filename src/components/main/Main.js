import {useReducer} from "react";

const Main = () => {
    const reducer = (state,action) => {
        switch (action.type) {
            case 'ADDDOG':

                return{...state,cats:[...state.cats, name:action.payload] }
        }

    };

    const initValue = () => (
        {cats: [], dogs:[]}
    );

    const [state,dispatch] = useReducer(reducer,null,initValue);
    return (
        <div>
            <div>
                <input type="text" placeholder={'dog'}/>
                <button>add dog</button>
                <input type="text" placeholder={'cat'}/>
                <button>add cat</button>
            </div>

        </div>
    );
};

export {Main};