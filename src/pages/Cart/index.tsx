import React, { useEffect, useRef } from "react";
import { useLocalStorage } from "react-use-storage";
import { Header } from "../../components/Header";
import { Screen, Content } from "./styles";
import { useState } from 'react';
import { realsConverter } from "../../utils/realsConverter";
import { FiTrash2 } from "react-icons/fi";


interface productProps {

    id: number;
    name: string,
    price: number,
    score: number,
    image: string;
}

interface cartProps {
    subtotal: number;
    total: number;
    shipping: number;
}

export function Cart() {

    const [cartStorage, setCartStorage, removeCartStorage] = useLocalStorage<Array<productProps>>("@laugames_cart", []);
    const [cartState, setCartState] = useState<Array<productProps>>();

    const productsContainer = useRef<HTMLDivElement>(null);

    const [cartTotals, setCartTotals] = useState<cartProps>();

    useEffect(() => {

        let total = 0;
        let subtotal = 0;
        let shipping = 10;

        setCartState(cartStorage);

        cartState?.forEach((item, index) => {

            subtotal += item.price;
            let totalShiping = shipping * cartState.length;

            if (subtotal >= 250) totalShiping = 0;

            total = subtotal + totalShiping;

            if ((index + 1) >= cartState.length) {

                setCartTotals({
                    shipping: totalShiping,
                    subtotal: subtotal,
                    total
                })
            }

        });

        if (cartState?.length === 0) {
            setCartTotals({
                shipping: 0,
                subtotal: 0,
                total: 0
            })
        }

    }, [cartState]);

    function handleRemoveProduct(indexRemove: number) {


        const arrayItemRemoved = cartState?.filter((item, index) => {

            if (indexRemove != index) {
                return item
            }
        });

        //Delete animation
        const chosenItemToRemove = productsContainer.current?.childNodes[indexRemove] as HTMLDivElement;
        chosenItemToRemove.style.transition= '0.3s linear';
        chosenItemToRemove.className = 'animate-deleted-product';

        setTimeout(() => {
            if (arrayItemRemoved) setCartStorage(arrayItemRemoved);
            setCartState(arrayItemRemoved);
            chosenItemToRemove.style.transition= '0s';
            chosenItemToRemove.className = '';

        }, 300);

    }

    return (
        <Screen>
            <Content>
                <Header />
                <main>
                    <header className="cart-header">
                        <h2>Meu carrinho</h2>
                    </header>
                    <div className="content-container" ref={productsContainer}>
                        {
                            cartState?.map((item, index) => {

                                const { id, name, price, image, score } = item;

                                return (
                                    <div key={index} className="item-product">

                                        <ul>
                                            <li>
                                                <div>
                                                    <button type="button" onClick={() => handleRemoveProduct(index)}>
                                                        <FiTrash2 className="deleteIcon" size={20} />
                                                    </button>
                                                    <img src={image} alt={name} />
                                                </div>
                                                <label>{name}</label>
                                            </li>
                                            <li>
                                                <span>{realsConverter(price)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <section className="prices-section">
                        <ul>
                            <li>Resumo do pedido</li>
                            <li>
                                <h3>Subtotal</h3>
                                <span>{realsConverter(cartTotals?.subtotal || 0)}</span>
                            </li>
                            <li>
                                <h3>Frete</h3>
                                <span>{realsConverter(cartTotals?.shipping || 0)}</span>
                            </li>
                            <li>
                                <h3>Total pedido</h3>
                                <span>{realsConverter(cartTotals?.total || 0)}</span>
                            </li>
                        </ul>
                    </section>
                </main>
            </Content>
        </Screen>
    )


}