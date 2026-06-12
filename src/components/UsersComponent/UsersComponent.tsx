import UserComponent from "../UserComponent/UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";



const UsersComponent = () => {
    console.log("Users Component");
    const foo = useCallback(()=> {
        console.log("test")
    },[]);//для того чтобы закешевать функцию или любой другой ссылочный обьект испольщуем хук юзколбек - тогда при передаче пропса на компонент на который была применена мемо он не будет каждый раз перерендериватся, потому что пропс ссылочного типа будет приходить один и тот же. В синтаксисе юзколбека массив зависимостей, работает так же как в юзэффекте, если будет аргумент и он будет изменяться, тогда перендер произойдет. Если нет, то нет
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value) )
    }, []);
    return (
        <div>
            Users
            <UserComponent foo={foo}/>

        </div>
    );
};

export default UsersComponent;