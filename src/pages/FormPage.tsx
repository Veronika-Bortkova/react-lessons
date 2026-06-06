import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/userValidator.ts";
interface IFormParam {
    username: string;
    password: string;
    age: number
}

const FormPage = () => {
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
    } = useForm<IFormParam>({mode: "all", resolver: joiResolver(userValidator)});//внутри функции юзформ передаем обьект настроек - в нем можно выбрать на какие действия будет проходить. joiResolver — это специальный адаптер, который берет правила из userValidator и переводит их на «язык», понятный для react-hook-form валидация формы
    const customHandler = (formDataProps:IFormParam)=>{
        console.log(formDataProps);
    };


    return (
        <div>
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
            <label>
            <input type="text" {...register("username")}/>
                {errors.username && <div>{errors.username.message}</div>}
            </label>
            </div>


            <div>
            <label>
                <input type="text" {...register("password")}/>
                {errors.password && <div>{errors.password.message}</div>}
            </label>
            </div>


            <div>
            <label>
            <input type="number" {...register("age")}/>
                {errors.age && <div>{errors.age.message}</div>}
            </label>
            </div>

            <button disabled={!isValid}>Send</button>
        </form>
        </div>
    );
};

export default FormPage;





