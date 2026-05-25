import  {type FC} from 'react';
type TagsPropsType ={
    tags: string[];
}
const Tegs:FC<TagsPropsType> = ({tags}) => {

    return (
        <>
            {tags.map(tag => tag + " ")}
        </>
    );
};

export default Tegs;