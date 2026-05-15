import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage.tsx";
import Layout from "./Layouts/Layout.tsx";
import PostPage from "./pages/PostPage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";


createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={""} element={<HomePage/>}/>
                <Route path={"posts"} element={<PostPage/>}/>
                <Route path={"comments"} element={<CommentsPage/>}/>
                <Route path={"users"} element={<UsersPage/>}/>
                <Route path={"products"} element={<ProductsPage/>}/>
            </Route>

        </Routes>


        </BrowserRouter>
    )
