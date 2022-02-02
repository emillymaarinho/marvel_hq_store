import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ButtonClear, Centered, Cart, CartClear, Container, MyCart, Icon, TableContainer } from "./ShoppingCart.styled";
import sad from '../assets/sad.png';
import TableCart from "../components/table/TableCart";
import Purchase from "../components/purchase/Purchase";

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
        <Cart>
            <Container>
                <MyCart>My cart</MyCart>
                {cartVisible ? <TableContainer>
                    <TableCart />
                </TableContainer>
                    : <CartClear>
                        <h1>Empty cart!</h1>
                        <Icon src={sad}></Icon>
                    </CartClear>}
                {cartVisible ? <Centered>
                    <ButtonClear onClick={clear}>clear cart</ButtonClear>
                </Centered>
                    : null}
            </Container>

            <Purchase />
        </Cart>
    );
};

export default ShoppingCart;