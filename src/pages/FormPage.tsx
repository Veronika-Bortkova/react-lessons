import {useForm} from "react-hook-form";
interface IFormParam {
    username: string;
    password: string;
    age: number
}

const FormPage = () => {
    const {handleSubmit, register} = useForm<IFormParam>();
    const customHandler = (formDataProps:IFormParam)=>{
        console.log(formDataProps);
    };


    return (
        <div>
        <form onSubmit={handleSubmit(customHandler)}>
            <input type="text" {...register("username")} />
            <input type="text" {...register("password")}/>
            <input type="number" {...register("age")}/>
            <button>Send</button>
        </form>
        </div>
    );
};

export default FormPage;





