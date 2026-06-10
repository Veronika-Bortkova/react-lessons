import {Outlet} from "react-router-dom";
import MenuComponent from "../components/MenuComponent/MenuComponent.tsx";


const MainLayout = () => {
    return (
        <>
            {/*<ul>*/}
            {/*    <MenuComponent>*/}
            {/*        /cars*/}
            {/*    </MenuComponent>*/}
            {/*<MenuComponent>*/}
            {/*    /newCars*/}
            {/*</MenuComponent>*/}
            {/*</ul>*/}
            <MenuComponent/>
            <Outlet/>
        </>
    );
};

export default MainLayout;