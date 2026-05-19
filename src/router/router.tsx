import {createBrowserRouter} from "react-router-dom"
import Layout from "../Layouts/Layout.tsx";
import HomePages from "../Pages/HomePages.tsx";
import UsersJsonplaceholdePage from "../Pages/UsersJsonplaceholdePage.tsx";

export const routes = createBrowserRouter([
    {path:"", element:<Layout/>,
            children:[
                {index: true, element:<HomePages/> },
                {path:"users/jsonplaceholde", element: <UsersJsonplaceholdePage/>}]}
])