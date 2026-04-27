
import type {FC, ReactNode} from "react";
type MyComponentPropType = {
    title: string;
    children?: ReactNode;//в качестве детейкомпонента могут быть другие компоненты - тогда нужно прописывать тип не стрингу или что-то другое, а ReactNode реакт узел
}
const MyComponent:FC<MyComponentPropType>= ({title, children}) => {
    return (
        <div className={"text-3xl font-bold underline"}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;