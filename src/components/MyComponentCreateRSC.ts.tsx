import type {FC} from "react";

type CreateRscTs = {text:string};
const MyComponentCreateRscTs:FC<CreateRscTs> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default MyComponentCreateRscTs;

//фанкшн компоненти можно делать через src + табуяция. ТАм нужно уделить и поправить немного, но облегчает.