
import {useDispatch} from "react-redux";
import {useAppSelector,  usersSliceActions} from "../../main.tsx";
import { useEffect} from "react";


const UsersPage = () => {
    // const stateType = useAppSelector(state => state);
    const {users} = useAppSelector(({userSlice}) => userSlice);
    // console.log(userSlice);
    const dispatch = useDispatch();// Он связывает ваш конкретный React-компонент с глобальным хранилищем store, которое вы обернули в <Provider> на самом верхнем уровне приложения. Если нужно изменить данные в Redux — создаем dispatch через useDispatch и отправляем экшен
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            // .then(value => dispatch(userSlice.actions.loadUsers(value)))
            .then(value => dispatch(usersSliceActions.loadUsers(value)))
    }, []);

    return (
        <div>
            {users.map((user) => {
                return <div key={user.id}>{user.name}</div>
            })}
        </div>
    );
};

export default UsersPage;