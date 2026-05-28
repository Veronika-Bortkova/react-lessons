import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import CartPage from "../pages/CartPage.tsx";


export const routes = createBrowserRouter([
    {path:"/", element: <MainLayout/>,
        children:[
            {path: "/", element: <UsersPage/>},
            {path: "user/cart/:userId", element: <CartPage/>}

        ]}
])