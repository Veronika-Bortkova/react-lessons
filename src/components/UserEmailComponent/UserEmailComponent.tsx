import type {FC} from "react";
type propUserEmailType = {
    email:string
}

const UserEmailComponent:FC<propUserEmailType> = ({email}) => {
    return (
        <div>
            {email}
        </div>
    );
};

export default UserEmailComponent;