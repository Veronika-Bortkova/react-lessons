import type {FC} from "react";
// import "./MyComponent.css" это стандартное подключение файла стилей. Если нужно подключить модульные стили, то имя файла в котором они лежат должно быть типа MyComponent.module.css и подключается оно по другому

import styles from "./MyComponent.module.css"
type MyComponentType = {
    text:string;
}

const MyComponent:FC<MyComponentType> = ({text}) => {
    return (
        // // <div className={"target"}>
        //     {text}
        // </div> // так вызываем когда стили обычным файлом стилей заданы

        <div className={styles.target}>
            {text}
        </div>
    );
};

export default MyComponent;