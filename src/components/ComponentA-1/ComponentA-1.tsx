import {useContext} from "react";
import {MyContext} from "../../MyContext/MyContext.tsx";
import "./ComponentA-1.tsx.css"

const ComponentA1 = () => {
    const {myTheme} = useContext(MyContext);
    return (
        <div className={myTheme}>
            Component A-1
        </div>
    );
};

export default ComponentA1;