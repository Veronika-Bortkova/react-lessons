import {useContext} from "react";
import {MyContext} from "../../MyContext/MyContext.tsx";


const ComponentB1 = () => {
    const { myTheme, changeMyTheme} = useContext(MyContext);
    return (
        <div>
            Componen tB1
            <button onClick={()=>{
                changeMyTheme(myTheme);

            }}>click me to change theme</button>
        </div>
    );
};

export default ComponentB1;