import type {FC} from "react";

type propTegType = {
    arrTeg:string[];
}
const TegComponent:FC<propTegType>= ({arrTeg}) => {
    return (
        <p>tags: {arrTeg.map((value, index) => <a className={"teg"} key={index} href={"#"}>{value}</a>)}
        </p>
    );
};

export default TegComponent;