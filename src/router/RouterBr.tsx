import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "../Layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import PostPage from "../pages/PostPage.tsx";
import PostsJsonplaceholderPage from "../pages/PostsJsonplaceholderPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UsersJsonplaceholderPage from "../pages/UsersJsonplaceholderPage.tsx";
import UsersDummyjsonPage from "../pages/UsersDummyjsonPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import PostsDummyjsonerPage from "../pages/PostsDummyjsonerPage.tsx";


export const RouterBr =

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route path={""} element={<HomePage/>}/>
                        <Route path={"posts"} element={<PostPage/>}>
                            <Route path={"jsonplaceholder"} element={<PostsJsonplaceholderPage/>}/>
                            <Route path={"dummyjson"} element={<PostsDummyjsonerPage/>}/>

                        </Route>
                        <Route path={"comments"} element={<CommentsPage/>}/>
                        <Route path={"users"} element={<UsersPage/>}>
                            <Route path={"jsonplaceholder"} element={<UsersJsonplaceholderPage/>}/>
                            <Route path={"dummyjson"} element={<UsersDummyjsonPage/>}/>
                        </Route>
                        <Route path={"products"} element={<ProductsPage/>}/>
                    </Route>

                </Routes>


            </BrowserRouter>


// export default RouterBr;