


import { useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {usersSliceActions} from "../../redux/slices/userSlice/userSlice.ts";


const UsersPage = () => {
    // const stateType = useAppSelector(state => state);
    // const {users, loadState} = useAppSelector(({userSlice}) => userSlice);

    const {users, loadState } = useAppSelector(({userSlice}) => userSlice);

    // console.log(userSlice);
    const dispatch = useAppDispatch();// Он связывает ваш конкретный React-компонент с глобальным хранилищем store, которое вы обернули в <Provider> на самом верхнем уровне приложения. Если нужно изменить данные в Redux — создаем dispatch через useDispatch и отправляем экшен
    useEffect(() => {
        dispatch(usersSliceActions.loadUsers());
    }, []);

    return (

        <div>
            {!loadState && <div>Loading...</div>}
            {users.map((user) => {
                return <div key={user.id}>{user.name}</div>
            })}
        </div>
    );
};

export default UsersPage;