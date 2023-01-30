import css from './Todo.module.css';
const Todo = ({todo}) => {
    const {userId,id,title}=todo

    return (
        <div className={css.Todo}>
            <p>userId:{userId}</p>
            <p>id:{id}</p>
            <p>title:{title}</p>
        </div>
    );
};

export {Todo};