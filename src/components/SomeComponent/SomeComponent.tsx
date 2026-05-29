import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";


const SomeComponent = () => {
    const[query, setqUery] = useSearchParams();
    useEffect(() => {
        const pg = query.get("pg");
        console.log(pg);
        fetch("https://reqres.in/api/users?page=" + pg, {
            method: "GET",
            headers: {"x-api-key": "free_user_3EORVB7qYwDU6zie1fp5zimAu9V"}
            })
            .then(value => value.json())
            .then(value => {
                console.log(value);
            })
    }, [query]);
    return (
        <div>

            </div>
    );
};

export default SomeComponent;