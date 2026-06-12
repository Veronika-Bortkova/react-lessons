//хуки обычно создаются в отдельной папке, эфайл должен быть tsx, хуки можо использовать или в функциональных компонентах или в других хуках. Для того чтобы в реакте создать совй хук нужно просто описать функцию, но назвать ее с префиксом use

import {useEffect, useState} from "react";

export const useFetch = () =>{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value) )
    }, []);
    return users;
}

// если ретернить как массив, то можно делать массив издвух компонентов с сеттером.__