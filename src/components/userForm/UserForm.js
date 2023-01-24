import {useForm} from "react-hook-form";

import {usersService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register,handleSubmit,reset} = useForm({mode:'all'});

    const submit = async (user) => {
        const {data} = await usersService.create(user);
        setUsers(prev => [...prev, data]);
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm};