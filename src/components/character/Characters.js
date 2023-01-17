import './main.css'
import {characters} from "./data";
import Character from "./Character";
export default function Characters () {
    return (
        <div className={'mainCh'}>
            {characters.map(value => (<Character item={value}/>))}
        </div>
    );
}