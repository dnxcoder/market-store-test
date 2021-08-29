import React, { useState, useEffect } from "react";
import { StyledBody } from "./styles";

import products from '../../../data/products.json';
import { Product } from "../../../components/Product";
import { Sort } from "../../../components/Sort";

//Redux Components
import { useDispatch, useSelector } from "react-redux";


export function Body() {

    const radioCP = useSelector((state: any) => state.radioCP);
    const [produtcsState, setProductsState] = useState(products);

    //Sort products
    useEffect(() => {

        console.log(radioCP)

        switch (radioCP.radioValue) {
            case 'price':
                sortProductsByPrice();
                break;
            case 'score':
                sortProductsByScore();
                break;
            case 'name':
                sortProductsByName();
                break;

            default:
                sortProductsByPrice();
                break;
        }


    }, [radioCP]);

    function sortProductsByPrice() {

        let sortedArrayByPrice = [...produtcsState];

        sortedArrayByPrice.sort((a, b) => {

            if (radioCP.reverse) {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
            } else {
                if (a.price > b.price) return -1;
                if (a.price < b.price) return 1;
            }

            return 0;
        });

        setProductsState(sortedArrayByPrice);

    }

    function sortProductsByScore() {

        let sortedArrayByScore = [...produtcsState];

        sortedArrayByScore.sort((a, b) => {

            if (radioCP.reverse) {
                if (a.score > b.score) return -1;
                if (a.score < b.score) return 1;
            } else {
                if (a.score > b.score) return 1;
                if (a.score < b.score) return -1;
            }
            return 0;
        });

        setProductsState(sortedArrayByScore);

    }

    function sortProductsByName() {

        let sortedArrayByName = [...produtcsState];

        sortedArrayByName.sort((a, b) => {

            if (radioCP.reverse) {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
            } else {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
            }

            return 0;
        });

        setProductsState(sortedArrayByName);

    }


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