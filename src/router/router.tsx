import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.tsx";
import UsersPage from "../components/UsersPage/UsersPage.tsx";
import UserPage from "../components/UserPage/UserPage.tsx";
import PostsPage from "../components/PostsPage/PostsPage.tsx";





export const routes = createBrowserRouter([
    {path:"/", element: <MainLayout/>, children:[
        {path:"users", element: <UsersPage/>},
            {path:"users/:id", element: <UserPage/>},
                    {path: "posts", element: <PostsPage/> }

        ]}


])