
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import { createBrowserRouter} from "react-router-dom";

export const routes = createBrowserRouter([
    {path: "", element: <Layout/>,
        children: [
            {index:true, element:<HomePage/>},
            {path: "users", element: <UserPage/>},
            {path: "posts", element: <PostPage/>}
        ]
    }
])