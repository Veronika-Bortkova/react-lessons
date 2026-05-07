import type {IProduct} from "../../models/ProductsModel.ts";
import type {FC} from "react";
import "./ProductComponent.css"
import ImgComponent from "../ImgComponent/ImgComponent.tsx";
import TegComponent from "../TegComponent/TegComponent.tsx";
import ReviesComponent from "../ReviesComponent/ReviesComponent.tsx";

type propProductType = {
    product:IProduct;
}
const ProductComponent:FC<propProductType>= ({product}) => {
    return (
        <div className={"block"}>
            <div className={"TopBlock"}>
                <div className={"imgBlock"}>
                    <ImgComponent arrImg={product.images}/>

                <img className={"thumbnail"} src={product.thumbnail}/>
                </div>
                <div className={"blokTitle"}>
                    <h1>{product.title}</h1>
                    <p className={"description"}>{product.description}</p>
                    <p>Category - {product.category}</p>
                    <p>{product.price} USD</p>
                    <p>discountPercentage - {product.discountPercentage}</p>
                    <p>rating {product.rating}</p>
                    <p>stock - {product.stock}</p>
                    <div><TegComponent arrTeg={product.tags}/></div>
                    <p>brend {product.brand}</p>
                    <p>{product.availabilityStatus}</p>
                    <p>{product.returnPolicy}</p>
                    <p>MinimumOrderQuantity - {product.minimumOrderQuantity}</p>
                    <p>SKU {product.sku}</p>
                </div>
            </div>
            <h3> Additional product information
            </h3>
            <p>Weight - {product.weight}</p>
            <p>Dimensions: width - {product.dimensions.width}, height - {product.dimensions.height}, depth - {product.dimensions.depth} </p>
            <p>WarrantyInformation - {product.warrantyInformation}</p>
            <p>ShippingInformation - {product.shippingInformation}</p>
            <h4>Reviews</h4>
            <div className={"reviews"}>
                <ReviesComponent arrRevies={product.reviews}/>
            </div>
            <div>
                <h5>Technical Details </h5>
                    <p>createdAt {product.meta.createdAt}</p>
                    <p>updatedAt {product.meta.updatedAt}</p>
                    <p>barcode {product.meta.barcode}</p>
                    <a href={product.meta.qrCode}>qrCode</a>

            </div>


        </div>
    );
};

export default ProductComponent;