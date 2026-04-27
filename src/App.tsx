import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>

         <MyComponent title={"Hello"}/>{/*это представлено как одинарный тег*/}
        <MyComponent title={"Параграф 1"}>
            Ljkjkh gjg fyff
        </MyComponent>{/*если мы представляем компонент как двойной тег и даем ему содержимое, то у пропса должно быть еще одно поле - чилдрен. Чтобы в подобных компонентах оно могло быть или нет визначаем его как необязательно поле (?)*/}
        <MyComponent title={"Параграф2"}/>



    </>
  )
}

export default App;
