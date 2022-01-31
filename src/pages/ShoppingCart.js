import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ButtonClear, Centered, CartClear, Container, MyCart, Icon } from "./ShoppingCart.styled";
import sad from '../assets/sad.png';
import TableCart from "../components/table/TableCart";

const ShoppingCart = () => {
    const { cart, clearCart } = useContext(CartContext);

    const [cartVisible, setCartVisible] = useState(true);

    useEffect(() => {
        if (cart && cart.length === 0) {
            setCartVisible(false);
        }
    }, [cart]);

    const clear = () => {
        clearCart();
        setCartVisible(false);
    };

    return (
        <div>
            <MyCart>My cart</MyCart>
            <Container >

                {cartVisible ? <div>
                    <TableCart />
                </div>

                    : <CartClear>
                        <h1>Não há produtos no seu carrinho!</h1>
                        <Icon src={sad}></Icon>
                    </CartClear>}

            </Container>
            {cartVisible ? <Centered>
                <ButtonClear onClick={clear}>clear cart</ButtonClear>
            </Centered>
                : null}
        </div>
    );
};

export default ShoppingCart;