import {useEffect, useState} from "react";
import type {IProduct} from "../../models/ProductsModel.ts";
import {loadProducts} from "../../services/services.ts"
import ProductComponent from "../ProductComponent/ProductComponent.tsx";

const AllProductsComponent = () => {
    const [allProducts, setAllProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        loadProducts()
            .then(response => {
                setAllProducts(response);
            })

    }, []);

    return (
        <>
            {allProducts.map(value => <ProductComponent key = {value.id} product={value}/>)}

      </>
    );
};

export default AllProductsComponent;