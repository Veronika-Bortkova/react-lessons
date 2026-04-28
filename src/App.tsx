import './App.css'
import {products} from "./data/ProductsList.ts";
import MyProduct from "./components/MyComponent/MyProduct/MyProduct.tsx";
import type {IProduct} from "./models/Product.ts";


function App() {

  return (
    <>

        {
            products.map((item:IProduct, index) => <MyProduct key={index} product={item}/>)
        }
        {/*если в нашем обдьекте нет индексов - то лучше добавить в меп индекс как второй аргумент и добавлять его в компонент - кей, потому что без єтого в консоли будут предупреждения  */}
    </>
  );
}

export default App;
