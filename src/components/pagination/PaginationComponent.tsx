import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: "1"});
    const handleClickN =  () => {
        let pg = query.get("pg");
        if (pg) {
            let pgN = +pg;

            if (pgN >= 1) {
                setQuery({pg: (++pgN).toString()})
            }
        }
    }
    const handleClickP =  () => {
        let pg = query.get("pg");
        if (pg) {
            let pgN = +pg;

            if (pgN > 1) {
                setQuery({pg: (--pgN).toString()})
            }
        }
    }
    return (

        <div>

            <button onClick={handleClickP}>Prev</button>
            <button onClick={handleClickN}>Next</button>

        </div>
    );
};

export default PaginationComponent;