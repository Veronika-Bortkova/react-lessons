import type {FC} from "react";
import type {IReviews} from "../../models/ProductsModel.ts";
type propReviesType = {
    arrRevies:IReviews[];
}

const ReviesComponent:FC<propReviesType> = ({arrRevies}) => {
    return (
        <>
            {arrRevies.map((value, index) => {
                return (

                    <div className={"reviewsBlock"} key={index}>
                        <p>Rating - {value.rating}</p>
                        <p>{value.comment}</p>
                        <p>{value.date}</p>
                        <p>{value.reviewerName}</p>
                    </div>
                ) })}
        </>
    );
};

export default ReviesComponent;