import type {FC, PropsWithChildren} from "react";


const NavBarComponent:FC<PropsWithChildren> = ({children}) => {
    return (
        <ul>
            {children}
        </ul>
    );
};

export default NavBarComponent;