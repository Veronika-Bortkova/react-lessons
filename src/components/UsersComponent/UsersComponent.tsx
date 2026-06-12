import UserComponent from "../UserComponent/UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";



const UsersComponent = () => {
    console.log("Users Component");
    const arr:number[] = useMemo(():number[]=>{
        return [11,22,33];//для того чтобы закешировать ссылочный обьект оборачиваем его в хук юзМемо - это функция - часто без аргумента, в ретерн которой мы просто отдаемтот ссылочный обьект, который нам нужен. Так же как юзКолбек имеет массив зависимостей - если они помещены в функцию как параметрт и в массив то сообтветсвенно при их изменениях перерендер будет.
    },[]);
    const foo = useCallback(()=> {
        console.log("test")
    },[]);//для того чтобы закешевать функцию испольpуем хук юзколбек - тогда при передаче пропса на компонент на который была применена мемо он не будет каждый раз перерендериватся, потому что пропс ссылочного типа будет приходить один и тот же. В синтаксисе юзколбека массив зависимостей, работает так же как в юзэффекте, если будет аргумент и он будет изменяться, тогда перендер произойдет. Если нет, то нет
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value) )
    }, []);
    return (
        <div>
            Users
            <UserComponent foo={foo} arr={arr}/>

        </div>
    );
};

export default UsersComponent;