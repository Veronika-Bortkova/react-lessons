import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.tsx";
import PageOne from "../Pages/PageOne.tsx";
import PostsComponent from "../components/postsComponent/PostsComponent.tsx";





export const routes = createBrowserRouter([
    {path:"/", element: <MainLayout/>, children:[{

    path:"/", element:<PageOne/>, children:[{
        index: true, element: <PostsComponent/>
            }]    }]
    }


])