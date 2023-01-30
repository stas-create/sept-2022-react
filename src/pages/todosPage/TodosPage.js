import {Todos} from "../../component";
import css from './TodosPages.module.css';

const TodosPage = () => {
    return (
        <div className={css.TodosPages}>
           <h2> All todos</h2>
            <Todos/>
        </div>
    );
};

export {TodosPage};