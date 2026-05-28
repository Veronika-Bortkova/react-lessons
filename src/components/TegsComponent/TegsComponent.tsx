import  {type FC} from 'react';
type TagsPropsType ={
    tags: string[];
}
const TegsComponent:FC<TagsPropsType> = ({tags}) => {

    return (
        <>
            {tags.map(tag => tag + " ")}
        </>
    );
};

export default TegsComponent;