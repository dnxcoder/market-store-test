import { StyledProduct } from "./styles";
import { useLocalStorage } from "react-use-storage";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface productProps {

    id: number;
    name: string,
    price: number,
    score: number,
    image: string;
}

export function Product({ id, name, price, score, image }: productProps) {


    const [cart, setCart, removeCart] = useLocalStorage<Array<productProps>>("@laugames_cart", []);

    function handleToCart({ id, image, name, price, score }: productProps) {

        const cloneCart = cart;

        console.log(cloneCart);

        cloneCart.push({
            id,
            name,
            price,
            score,
            image
        })

        setCart(cloneCart);

        //Toast warning
        toast(`O game ${name} foi adicionado ao carrinho`)



    }

    return (
        <StyledProduct>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
            <header>
                <img src={image} alt={name} />
            </header>
            <footer>
                <ul>
                    <li>{name}</li>
                    <li>Pontuação {score}</li>
                    <li>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</li>
                    <li>
                        <button type="button" onClick={() => { handleToCart({ id, name, price, score, image }) }}>
                            Compre já
                        </button>
                    </li>
                </ul>
            </footer>

        </StyledProduct>
    )
}