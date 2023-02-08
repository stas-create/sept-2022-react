import {Dog} from "../dog/Dog";

const Dogs = ({dogs, dispatch}) => {

    return (
        <div>
            <h2>Dogs</h2>
            <div>
                {dogs.map(dog => <Dog key={dog.idDog} dog={dog} dispatch={dispatch}/>)}
            </div>
        </div>
    );
};

export {Dogs};