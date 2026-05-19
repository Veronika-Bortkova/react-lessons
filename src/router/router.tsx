import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersJsonplaceholderPage from "../pages/UsersJsonplaceholderPage.tsx";
import UsersDummyjsonPage from "../pages/UsersDummyjsonPage.tsx";

export const routes = createBrowserRouter([
    {path: "", element:<Layout/>,
        children:[
            {index:true, element: <HomePage/>},
            {path:"users", element: <UsersPage/>},
            {path: "posts", element: <PostPage/>},
            {path: "comments", element: <CommentsPage/>},
            {path: "products", element: <PostPage/>},
            {path: "users/jsonplaceholder", element: <UsersJsonplaceholderPage/>},
            {path: "users/dummyjson", element: <UsersDummyjsonPage/>},





        ]

    }
])