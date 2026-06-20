import {useEffect, useState} from "react";

export const useFetch = <T,>(url:string) =>{//запятая в джинерике, чтобы тайпскрипт понял что это джинерик, а не компонент
const [data, setData] = useState<T | null>(null);
useEffect(() => {
    fetch(url)
        .then(value => value.json())
        .then(value => setData(value) )
}, [url]);
return data;
}