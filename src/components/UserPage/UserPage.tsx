import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {usersSliceActions} from "../../redux/slices/userSlice/userSlice.ts";

const UserPage = () => {
    const {id} = useParams();
    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
       if (id) dispatch(usersSliceActions.loadUser(id));

    }, []);
    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {user && <div>{user.id}  {user.name}</div>}
        </div>
    );
};

export default UserPage;