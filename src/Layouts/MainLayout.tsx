import {Outlet} from "react-router-dom";
import MenuComponent from "../components/MenuComponent/MenuComponent.tsx";
import NavBarComponent from "../components/NavBarComponent.tsx";


const MainLayout = () => {
    return (
        <>
            <NavBarComponent>
            <MenuComponent form={"/cars"}>
              Cars
            </MenuComponent>
                <MenuComponent form={"/newCars"}>
                    New Cars
                </MenuComponent>
            </NavBarComponent>




            {/*<MenuComponent/>*/}
            <Outlet/>
        </>
    );
};

export default MainLayout;