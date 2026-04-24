import type {FC} from "react";

type MyComponntPropType = {text:string};

//function MyComponentVariable({text}: {text:string})  {чтоби не делать такую сложную типизацию можем сделать тип

//function MyComponentVariable({text}: MyComponntPropType)  {
 //   return <div>{text}</div>
//}

//также можно сделать фанкшн (функциональній компонент - он описівается как стрелочная функция)

//const MyComponentVariable = ({text}: MyComponntPropType) =>{
//  return <div>{text}</div>
//}

//так же для описания фанкшинел компонента можно описать тип не в аргументе, а в переменной - фанкшинал компонентс - єто тип переменной, и в ней можно джинериком прописать наш требуемий тип

const MyComponentVariable:FC<MyComponntPropType> = ({text}) =>{
return <div>{text}</div>
}

export default MyComponentVariable;

//просто хочу закомитить
