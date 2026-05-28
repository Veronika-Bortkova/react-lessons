import {useEffect, useState} from 'react';
import type {ICommentJsonplaceholder} from "../../models/CommentJsonplaceholderModel.ts";
import {usersService} from "../../services/Api.Jsonplaceholder.ts";
import CommentsJsonplaceholderBlockComponent from "../CommentsJsonplaceholderBlockComponent/CommentsJsonplaceholderBlockComponent.tsx";


const CommentsJsonplaceholderComponent = () => {
    const[arrCommentsJsonplaceholder, setArrCommentsJsonplaceholder] = useState<ICommentJsonplaceholder[]>([]);
    useEffect(() => {
        usersService.getComments()
            .then(posts =>{
                setArrCommentsJsonplaceholder(posts);
            })

    }, []);
    return (

        <>
            {arrCommentsJsonplaceholder.map(comment => <CommentsJsonplaceholderBlockComponent key={comment.id} comment={comment}/>)}

        </>
    );
};

export default CommentsJsonplaceholderComponent;