import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import {routes} from "./router/router.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";





createRoot(document.getElementById('root')!)
    .render(
        <Provider store={store}>
        {/* store - сховище к которому можно будет обратьтся из любого места/страницы/компонента, которое оно охватывает - провайдер. В нашем случае все что есть в проекте, потому что это самый верхний уровень. СОздается это сховище с помощью специальной функции конфигур стор. Внутрь передаем опции из которых будет состоять сховище. Для этого существует параметр редьюсер в котором будут части сховиша. В редьюсере они называются слайсы - кусочки для работы с опледеленными страницами/компонентами тощо*/}
            <RouterProvider router = {routes}/>
        </Provider>
    )
