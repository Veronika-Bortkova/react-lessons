import {useForm} from "react-hook-form";
import {login} from "../../services/Api.Demmyjason.ts";
import "./LoginComponent.css"
export interface IFormProp {
    username:string;
    password: string
}


const LoginComponent = () => {
    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm<IFormProp>();
    const customHandler = (formDataProps:IFormProp) =>{
        const loginProp = {...formDataProps, expiresInMins: 1}
        login(loginProp);
        reset();
    }

    return (
        <div >
            <form className={"form"} onSubmit={handleSubmit(customHandler)}>
                <input type={"text"} {...register("username")}></input>
                <input type={"password"} {...register("password")}></input>
                <button>Send</button>
            </form>
        </div>
    );
};

export default LoginComponent;