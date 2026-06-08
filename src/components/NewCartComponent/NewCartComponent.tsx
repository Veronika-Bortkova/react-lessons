import {Form} from "react-router-dom";
import "./NewCartComponent.css"
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator/carValidator.ts";
import {postCar} from "../../services/car.service.ts";
interface IFormProp {
    brand: string,
    price: number,
    year: number
}


const NewCartComponent = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid},
    } = useForm<IFormProp>({mode: "all", resolver: joiResolver(carValidator)});
    const customHandler = (formDataProps:IFormProp)=>{
        postCar(formDataProps);
        reset();//очищаем форму после отправки
    };

    return (
        <>
            <Form onSubmit={handleSubmit(customHandler)}>
                <div className={"form"}>
                    <input id={"brand"} type={"text"} placeholder={"Brand"} {...register("brand")}/>
                    {errors.brand && <div>{errors.brand.message}</div>}

                    <input id={"price"} type={"number"} placeholder={"Price"} {...register("price")}/>
                    {errors.price && <div>{errors.price.message}</div>}

                    <input id={"year"} type={"number"} placeholder={"Year"} {...register("year")}/>
                    {errors.year && <div>{errors.year.message}</div>}

                    <button disabled={!isValid}>Send</button>
                </div>
            </Form>
        </>
    );
};

export default NewCartComponent;