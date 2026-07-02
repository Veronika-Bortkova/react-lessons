import type {IUser} from "../../../Models/UserModel.ts";
import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";

type UsersSliceTipe = {
    users: IUser[];
    user: IUser|null;
    loadState: boolean
}
const initialState:UsersSliceTipe = {users:[], user:null, loadState: false};
const loadUsers = createAsyncThunk(
    "UsersSlice/loadUsers",
    async (_, thunkAPI)=>{
        try {


    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(value => value.json());
            // thunkAPI.dispatch(usersSliceActions.changeLoadstate(true));
        return thunkAPI.fulfillWithValue(users);// делаем возврат через обьект thunkAPI - он внутри имеет статусы как дейстие выполнилось. Через его метод фулфилвизвелью и аргументом передаем то, что нужно закинуть в обьект. То есть мы получаем на выходе то же, как если бы мы ретернили велью, но получаем четкий статус промиса

    }catch (e){
            return thunkAPI.rejectWithValue("some error");//через трай кетч - разделяем  ретерны в случае успешного и неуспешного скачивание - статусов промиса
        }
    }
    );// эта функуия принимает два аргумента - название - обычно такое же как слайс к которому она принадлежит/название самой функции, второй аргумент - колбек функция у котрой есть два аргумента. Эта функция уже может быть асинхронной.


const loadUser = createAsyncThunk(
    "UserSlice/loadUsers",
    async (id:string, thunkAPI)=>{
        try {


            const user = await fetch("https://jsonplaceholder.typicode.com/users"+"/"+id)
                .then(value => value.json());
            // thunkAPI.dispatch(usersSliceActions.changeLoadstate(true));
            return thunkAPI.fulfillWithValue(user);// делаем возврат через обьект thunkAPI - он внутри имеет статусы как дейстие выполнилось. Через его метод фулфилвизвелью и аргументом передаем то, что нужно закинуть в обьект. То есть мы получаем на выходе то же, как если бы мы ретернили велью, но получаем четкий статус промиса

        }catch (e){
            return thunkAPI.rejectWithValue("some error");//через трай кетч - разделяем  ретерны в случае успешного и неуспешного скачивание - статусов промиса
        }
    }
);// эта функуия принимает два аргумента - название - обычно такое же как слайс к которому она принадлежит/название самой функции, второй аргумент - колбек функция у котрой есть два аргумента. Эта функция уже может быть асинхронной.
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers:{
        changeLoadstate: (state, action:PayloadAction<boolean>) =>{
            state.loadState = action.payload;

        }
    },
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected, (state, action) =>{
                console.log(state);
                console.log(action)

        })
            .addCase(loadUser.fulfilled, (state, action)=>{
                state.user = action.payload;
            })
            .addMatcher(isFulfilled(loadUser,loadUsers), state => {
                state.loadState = true;
            })//это функция которая следит отработали ли другие функции isFulfille загружено, может быть из что-то другое, смотря что нам нужно


});
export const usersSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
}