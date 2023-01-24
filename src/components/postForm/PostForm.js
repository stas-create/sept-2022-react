import {useForm} from "react-hook-form";

import {postsService} from "../../services";

const PostForm = ({setPosts}) => {
    const {register,handleSubmit,reset} = useForm({mode:'all'});

    const submit = async (post) => {
        const {data} = await postsService.create(post);
        setPosts(prev => [...prev, data]);
        reset();

    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'userId'} {...register('userId',{valueAsNumber:true})}/>
            <input type="text" placeholder={'Tittle'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};

export {PostForm};