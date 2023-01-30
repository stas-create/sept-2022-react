import css from './Comment.module.css';

import { useNavigate} from "react-router-dom";
const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div className={css.Comment}>
            <p>postId:{postId}</p>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>body:{body}</p>
            <button onClick={()=>navigate(id.toString())}>Post details</button>

        </div>
    );
};

export {Comment};