import {createBrowserRouter} from "react-router-dom";
import HomePage from "../Pages/HomePage.tsx";
import MainLayout from "../Layouts/MainLayout.tsx";

export const routes = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children:[
            {path: "/", element: <HomePage/>}




        ]}





])