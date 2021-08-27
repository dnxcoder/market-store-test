import React, { useState } from "react";
import { StyledBody } from "./styles";



import products from '../../../data/products.json';
import { Product } from "../../../components/Product";



export function Body() {

    const [produtcsState, setProductsState] = useState(products);

    return (
        <StyledBody>
            <h2>Promoçoes</h2>
            <div className="products-container">
                {produtcsState.map((product, index) => {

                    return (
                        <Product {...product} />
                    )
                })}
            </div>
        </StyledBody>
    )
}