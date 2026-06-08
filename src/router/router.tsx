import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.tsx";
import CarsPage from "../Pages/CarsPage.tsx";
import CreateNewCarPage from "../Pages/CreateNewCarPage.tsx";





export const routes = createBrowserRouter([
    {path:"/", element: <MainLayout/>, children:[
        {path:"/cars", element: <CarsPage/>},
            {path: "/newCars", element: <CreateNewCarPage/>}

        ]}


])