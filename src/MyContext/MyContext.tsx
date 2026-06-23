import {createContext} from "react";

type MyContextType ={
    myTheme:string;//имя сласса для сетлой темы
    changeMyTheme: (nameClass:string)=>void;//функция, принимающая стрингу и ничего не возвращающая
}
export const init = {
    myTheme: "lightTheme",
    changeMyTheme: (nameClass: string) => {
        console.log(nameClass)
    }
}

export const MyContext = createContext<MyContextType>(init);