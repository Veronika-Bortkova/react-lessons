import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.tsx";
import HomePage from "../Pages/HomePage.tsx";
import LoginPage from "../Pages/LoginPage.tsx";
import AuthResorcesPage from "../Pages/AuthResorcesPage.tsx";





export const routes = createBrowserRouter([
    {path:"/", element: <MainLayout/>, children:[
        {index:true, element: <HomePage/>},
            {path: "login", element: <LoginPage/>},
            {path:"auth/resorces", element: <AuthResorcesPage/>}


        ]}


])