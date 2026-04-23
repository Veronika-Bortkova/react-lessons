import './App.css'
import MyComponent from "./components/MyComponents.tsx";
import MyComponentVariable from "./components/MyComponentVariable.tsx";
import MyComponentCreateRscTs from "./components/MyComponentCreateRSC.ts.tsx";

function App() {


  return (
      <>
          <MyComponent/>
          <MyComponent/>
          <MyComponent/>
          {MyComponent()}{/* в фигурных скобках - это как элемент интерполяции, можно вызвать почти любой джаваскриптовый файл так - обычно не используется*/}
          <MyComponentVariable text={"Hello brain"}/>
          <MyComponentCreateRscTs text={"Brain explosion"}/>

</>

      );
        }

export default App;
