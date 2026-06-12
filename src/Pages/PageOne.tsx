import LeftBranch from "../components/LeftBranch.tsx";
import RightBranch from "../components/RightBranch.tsx";
import {init, MyContext} from "../context/MyContext.tsx";
import {useState} from "react";


const PageOne = () => {

//в велью контекста ми можем вставить обьект инит который мы сделали в теле контекста, но это будет работать только если нам нужно только считывание данных. Если же мы хотим что-то менять, то нам нужно создать юзэффект - в том компоненте, где мы вызываем контекст - в этом случае в пейджВан, и в него записать каунтер. В велью записуем обьект, в котором каунтеру присваиваем нулевое значение, а в функцию инкремент как ниже. После этого в ветках которые обернуты контекстом здесь и в их дочерних ветках мы можем обращаться к хуку юзконтекст и он отдаст нам значение каунтервелью и тд

const [counter, setCounter] = useState(init.counterValue)
    return (
        <>
            <MyContext.Provider value={{
                counterValue: counter,
                increment: (obj)=>{
                setCounter (++obj);

            }}
            }>
            <LeftBranch/>
            <RightBranch/>
            </MyContext.Provider>
        </>
    );
};

export default PageOne;