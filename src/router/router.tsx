import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.tsx";
import PageOne from "../Pages/PageOne.tsx";
import PageTwo from "../Pages/PageTwo.tsx";






export const routes = createBrowserRouter([
    {path:"/", element: <MainLayout/>, children:[{

    path:"/", element:<PageOne/>},
            {path:"page-2", element:<PageTwo/>}]
    }


])