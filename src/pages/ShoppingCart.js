import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ButtonClear, Centered, Cart, CartClear, Container, MyCart, Icon } from "./ShoppingCart.styled";
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
            <content style={{ flex: 2 }}>
                <MyCart>My cart</MyCart>
                <Container >
                    {cartVisible ? <div>
                        <TableCart />
                    </div>
                        : <CartClear>
                            <h1>Empty cart!</h1>
                            <Icon src={sad}></Icon>
                        </CartClear>}
                </Container>
                {cartVisible ? <Centered>
                    <ButtonClear onClick={clear}>clear cart</ButtonClear>
                </Centered>
                    : null}
            </content>
            <div style={{ flex: 1 }}>
                <Purchase />
            </div>
        </Cart>
    );
};

export default ShoppingCart;