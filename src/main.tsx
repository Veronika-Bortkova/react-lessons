import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import {routes} from "./router/router.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "./Models/UserModel.ts";
type UsersSliceTipe = {
    users: IUser[]
}
const initialState:UsersSliceTipe = {users:[]};
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers:{
        loadUsers: (state, action: PayloadAction<IUser[]>)=>{
            state.users = action.payload

        }
    }

})
export const usersSliceActions = {
    ...userSlice.actions
}
const store = configureStore({
reducer: {
    userSlice: userSlice.reducer,//кусочек юзерслайс формируем отдельно при помощи функции криэйт слайс, при помощи обьекта опшинс. В нем нужно визначити три поля - унифицированніе, нейм - назва довильна, но обычно как тот слайс для которого делаем, наальное состояние, и методы, которые будут на это начальное состояние влиять. В параметре редьюсерс будут функции, которые влияют на состояние - ини циалл.
    // postsSlice: null

}
})

export const useAppSelector =useSelector.withTypes<ReturnType<typeof store.getState>>();
createRoot(document.getElementById('root')!)
    .render(
        <Provider store={store}>
        {/* store - сховище к которому можно будет обратьтся из любого места/страницы/компонента, которое оно охватывает - провайдер. В нашем случае все что есть в проекте, потому что это самый верхний уровень. СОздается это сховище с помощью специальной функции конфигур стор. Внутрь передаем опции из которых будет состоять сховище. Для этого существует параметр редьюсер в котором будут части сховиша. В редьюсере они называются слайсы - кусочки для работы с опледеленными страницами/компонентами тощо*/}
            <RouterProvider router = {routes}/>
        </Provider>
    )
