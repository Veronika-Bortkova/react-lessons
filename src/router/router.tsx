
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import { createBrowserRouter} from "react-router-dom";
import SinglUserDatailsPage from "../pages/SinglUserDatailsPage.tsx";

export const routes = createBrowserRouter([
    {path: "", element: <Layout/>,
        children: [
            {index:true, element:<HomePage/>},
            {path: "users", element: <UserPage/>},
            {path: "users/datails", element:<SinglUserDatailsPage/>},
            {path: "posts", element: <PostPage/>}
        ]
    }
])