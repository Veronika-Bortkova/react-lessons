import {useEffect, useState} from 'react';
import type {ICommentJsonplaceholder} from "../../models/CommentJsonplaceholderModel.ts";
import {usersService} from "../../services/Api.Jsonplaceholder.ts";
import CommentsJsonplaceholderBlock from "../CommentsJsonplaceholderBlock/CommentsJsonplaceholderBlock.tsx";


const CommentsJsonplaceholder = () => {
    const[arrCommentsJsonplaceholder, setArrCommentsJsonplaceholder] = useState<ICommentJsonplaceholder[]>([]);
    useEffect(() => {
        usersService.getComments()
            .then(posts =>{
                setArrCommentsJsonplaceholder(posts);
            })

    }, []);
    return (

        <>
            {arrCommentsJsonplaceholder.map(comment => <CommentsJsonplaceholderBlock key={comment.id} comment={comment}/>)}

        </>
    );
};

export default CommentsJsonplaceholder;