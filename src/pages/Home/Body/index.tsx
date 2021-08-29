import React, { useState, useEffect } from "react";
import { StyledBody } from "./styles";

import products from '../../../data/products.json';
import { Product } from "../../../components/Product";
import { Sort } from "../../../components/Sort";

//Redux Components
import { useDispatch, useSelector } from "react-redux";


export function Body() {

    const radioCP = useSelector((state: any) => state.radioCP);


    useEffect(()=>{

        console.log(radioCP.radioValue);
        
    },[radioCP])

    const [produtcsState, setProductsState] = useState(products);

    return (
        <StyledBody>
            <Sort />
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