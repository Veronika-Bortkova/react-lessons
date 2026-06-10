export const retriveLocalStorage =<T>(key:string)=>{
    const obect = localStorage.getItem(key) || "";//написали метод для извлечения  обьекта из локалсторидж с типизацией, чтобы убрать из типизации - или ноль. Написали, что нмы получаем или обьект или пустую стрингу. НО именно стрингу
    if (!obect){
        return {} as T// если обжект не существует, то возвращаем пустой обьект строго типизированній так же как обьект данніх
    }
    const pars = JSON.parse(obect);
    return pars as T

}