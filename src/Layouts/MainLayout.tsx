import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu/MenuComponent.tsx";
import {init, MyContext} from "../MyContext/MyContext.tsx";
import {useState} from "react";


const MainLayout = () => {
    const [theme, setTheme] = useState(init.myTheme);
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <MyContext.Provider value={{
                myTheme: theme,
                changeMyTheme: (nameClass)=> {
                    // nameClass !== init.myTheme && setTheme("darkTheme")
                    if (nameClass === init.myTheme) {
                        setTheme("darkTheme")
                    } else {
                            setTheme("lightTheme")
                        }

                }
            }}>



            <Outlet/>
            </MyContext.Provider>
           
        </div>
    );
};

export default MainLayout;