import {useForm} from "react-hook-form";
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
    } = useForm<IFormParam>({mode: "all"});//внутри функции юзформ передаем обьект настроек - в нем можно выбрать на какие действия будет проходить валидация формы
    const customHandler = (formDataProps:IFormParam)=>{
        console.log(formDataProps);
    };


    return (
        <div>
        <form onSubmit={handleSubmit(customHandler)}>
            <label>
            <input type="text" {...register("username", {
                required: true, //говорит о том что єто обзательное поле
                pattern: {
                    value: /\w+/,//в паттерн можем заполнить как обьект - тогда кроме велью можем сразу прописать, что выдавать при ошибке валидации. опшн - єто обьект, віставляется как второй аргумент функции реджистер
                    message: "wrong name",
                },
                maxLength: {
                    value: 7,
                    message: "wrong name"
                }
            })} />
                {errors.username && <div>{errors.username.message}</div>}
            </label>
            <label><input type="text" {...register("password", {
                required: true,
                minLength:{value:3, message: "pass too short"},// минимальная длина слова
                maxLength: {value:6, message: "parr too long"},// максимальная длина слова
            })}/>
                {errors.password && <div>{errors.password.message}</div>}
            </label>
            <label>
            <input type="number" {...register("age", {
                required: true,
                valueAsNumber: true,
                min: {value: 18, message: "age too small"},//проверка именно размера числа - НЕ длина слова
                max: {value: 117, message: "age too big"}
            })}/>
                {errors.age && <div>{errors.age.message}</div>}
            </label>
            <button disabled={!isValid}>Send</button>
        </form>
        </div>
    );
};

export default FormPage;





