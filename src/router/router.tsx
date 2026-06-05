import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.tsx";
import FormPage from "../pages/FormPage.tsx";





export const routes = createBrowserRouter([
    {path:"/", element: <MainLayout/>, children:[
            {path: "/", element:<FormPage/>}

        ]}


])