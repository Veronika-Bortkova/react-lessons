import type {FC} from "react";
type propTagType = {
    tags:string[];
}

const TagsComponent:FC<propTagType> = ({tags}) => {
    return (
        <>
            {tags.map((value) => <span key = {value}>{value} </span>)}
        </>
    );
};

export default TagsComponent;