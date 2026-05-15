import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {path: "", element:<Layout/>,
        children:[
            {index:true, element: <HomePage/>},
            {path:"users", element: <UsersPage/>},
            {path: "posts", element: <PostPage/>},
            {path: "comments", element: <CommentsPage/>},
            {path: "products", element: <PostPage/>}

        ]

    }
])