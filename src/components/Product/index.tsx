import React from "react";
import { StyledProduct } from "./styles";

interface productProps {

    id:number;
    name: string,
    price: number,
    score: number,
    image: string;
}

export function Product({ id, name, price, score, image }: productProps) {


    return (
        <StyledProduct>
            <header>
                <img src={image} alt={name} />
            </header>
            <footer>
                <ul>
                    <li>{name}</li>
                    <li>Pontuação {score}</li>
                    <li>R$: {price}</li>
                </ul>
            </footer>

        </StyledProduct>
    )
}