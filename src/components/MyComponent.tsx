import type {FC} from "react";
// import "./MyComponent.css" это стандартное подключение файла стилей. Если нужно подключить модульные стили, то имя файла в котором они лежат должно быть типа MyComponent.module.css и подключается оно по другому


type MyComponentType = {
    text:string;
}

const MyComponent:FC<MyComponentType> = ({text}) => {
    return (
        // // <div className={"target"}>
        //     {text}
        // </div> // так вызываем когда стили обычным файлом стилей заданы

        <div className={"text-3xl font-bold underline"}>
            {text}
        </div>
    );
};

export default MyComponent;