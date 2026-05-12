import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout.tsx";
import APage from "./pages/APage.tsx";
import BPage from "./pages/BPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import A1Page from "./pages/A1Page.tsx";
import A2Page from "./pages/A2Page.tsx";

const router = createBrowserRouter([
    {path: "/", element: <Mainlayout/>,
    children:[
        {path: "a", element: <APage/>,
        children:[
            {path: "1", element: <A1Page/>},
            {path: "2", element: <A2Page/>},

        ]
        },
        {path:"b", element: <BPage/>},
        {path:"", element:<HomePage/>}
    ]
    },
])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)
