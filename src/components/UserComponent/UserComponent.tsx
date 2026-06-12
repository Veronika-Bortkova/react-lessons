import {type FC, memo} from "react";


const UserComponent:FC<{foo: ()=>void, arr: number[], item:{name:string}} > = memo(({arr, item}) => {
    console.log("User");
    console.log(arr);
    return (
        <div>
            {item.name}

        </div>
    );
});

export default UserComponent;