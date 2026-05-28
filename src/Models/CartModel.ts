export interface ICartsObj {

    carts: ICart[];
    total: number;
    skip: number;
    limit: number
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string
}

export interface ICart{
    id: number;
    products: IProduct[];
    total: number;
    skip: number;
    limit: number
}

