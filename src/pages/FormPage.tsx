import {type FormEvent, useState} from "react";

interface IFormParam {
    username: string;
    password: string
}

const FormPage = () => {
    const [formState, setFormState] = useState<IFormParam>({username:"default value", password:"1111"});
    // const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, username:input.value});
    //     console.log(input.value);
    //
    // }
    //
    // const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, password:input.value});
    //     console.log(input.value);
    //
    // }
    const handlSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password
        }
        console.log(user);
    }
    const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name);
        setFormState({...formState, [input.name]:input.value});//в реакте [] такой формой записи можно записать динамическое поле - тоесть в каком инпуте будет отрабатывать функция хндлер сейчас то имя и будет подставляться - то есть измеения там и будут

    }

    return (
        <div>
        <form onSubmit={handlSubmit}>
            <input type="text" name="username" value={formState.username} onChange={handleInputChange}/>
            <input type="text" name="password" value={formState.password} onChange={handleInputChange}/>
            <button>Send</button>
        </form>
        </div>
    );
};

export default FormPage;