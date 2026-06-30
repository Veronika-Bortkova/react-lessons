import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,//кусочек юзерслайс формируем отдельно при помощи функции криэйт слайс, при помощи обьекта опшинс. В нем нужно визначити три поля - унифицированніе, нейм - назва довильна, но обычно как тот слайс для которого делаем, наальное состояние, и методы, которые будут на это начальное состояние влиять. В параметре редьюсерс будут функции, которые влияют на состояние - ини циалл.
        // postsSlice: null

    }
})