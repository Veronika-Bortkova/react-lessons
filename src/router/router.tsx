import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.tsx";





export const routes = createBrowserRouter([
    {path:"/", element: <MainLayout/>,}


])