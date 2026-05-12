import { createRoot } from 'react-dom/client'
import {RouterProvider } from "react-router-dom";
import {routes} from "./router/router.tsx";




createRoot(document.getElementById('root')!)
    .render(<RouterProvider router = {routes} />)
