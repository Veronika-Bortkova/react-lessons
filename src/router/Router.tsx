import {createBrowserRouter} from "react-router-dom"
import UsersJsonplaceholderPage from "../Pages/UsersJsonplaceholderPage.tsx";
import Layout from "../Layouts/Layout.tsx";
import PostsJsonplaceholderPage from "../Pages/PostsJsonplaceholderPage.tsx";
import PostsDummyjsonPage from "../Pages/PostsDummyjsonPage.tsx";
import CommentsJsonplaceholderPage from "../Pages/CommentsJsonplaceholderPage.tsx";

export const router = createBrowserRouter([
    {path:"", element: <Layout/>,
        children:[
            {path:"users/jsonplaceholder", element:<UsersJsonplaceholderPage/> },
            {path:"posts/jsonplaceholder", element:<PostsJsonplaceholderPage/> },
            {path:"posts/dummyjson", element:<PostsDummyjsonPage/> },
            {path:"comments/jsonplaceholder", element:<CommentsJsonplaceholderPage/> }






        ]}






    ]
)