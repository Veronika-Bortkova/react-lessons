import {useSearchParams} from "react-router-dom";



const PaginationComponent = () => {
    const[query, setQuery] = useSearchParams({pg:"1"})//хук юзсеч парам - всередину как обьект принимаются опции, в обьекте поле - это название параметра и его дефолтное значение (обычно еденица - ОБЯЗАТЕЛЬНО СТРИНГА). Этот хук возвращает массив с двумя значениями - обычно называют квери и сетквери. Текущее значение и заменяеемое.
    return (
        <div>
            <button onClick={()=>{
                const pg = query.get("pg");
                if (pg){
                    let currentPage = +pg;//для того чтобы вытянуть инфу из сечпарам применяют метод гет. Плюс ставим ячтобы перевести в число - так как содержание юзпарам всегда стринга. Ошибка получается изза того, что нам может вернуться нал, поэтому делаем проверку на то, что параметра вообще существует.
                    // currentPage++;//просто ставим увеличение
                    setQuery({pg:(--currentPage).toString()});// передаем через сеттер новое значение юзпарам - переводим сразу в стрингу, так как он принимает только стрингу
                }

            }}>prev</button>
            <button onClick={()=>{
                const pg = query.get("pg");
                if (pg){
                    let currentPage = +pg;
                    setQuery({pg:(++currentPage).toString()});
                }

            }}>next</button>

        </div>
    );
};

export default PaginationComponent;