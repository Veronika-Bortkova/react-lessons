import {createBrowserRouter} from "react-router-dom"
import Layout from "../Layouts/Layout.tsx";
import HomePages from "../Pages/HomePages.tsx";
import UsersJsonplaceholderPage from "../Pages/UsersJsonplaceholderPage.tsx";
import UsersDummyjsonPage from "../Pages/UsersDummyjsonPage.tsx";
import PostsJsonplaceholderPage from "../Pages/PostsJsonplaceholderPage.tsx";
import PostsDummyjsonPage from "../Pages/PostsDummyjsonPage.tsx";

export const routes = createBrowserRouter([
    {path:"/", element:<Layout/>,
            children:[
                {index: true, element:<HomePages/> },
                {path:"users/jsonplaceholder", element: <UsersJsonplaceholderPage/>},
                {path:"users/dummyjson", element: <UsersDummyjsonPage/>},
                {path:"posts/jsonplaceholder", element: <PostsJsonplaceholderPage/>},
                {path:"posts/dummyjson", element: <PostsDummyjsonPage/>},

                
            ]}
])