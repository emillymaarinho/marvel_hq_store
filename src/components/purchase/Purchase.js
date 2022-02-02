import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Total, ButtonBuy, Container, Summary } from "./Purchase.styled";

const Purchase = () => {

    const { cart } = useContext(CartContext);

    const totalOfPrice = () => {
        let total = 0;
        for (let item of cart) {
            total += item.price * item.qnt
        }
        return total.toFixed(2);
    }

    const totalOfProducts = () => {
        let products = 0;
        for (let item of cart) {
            products += item.qnt;
        }
        return products;
    }

    return (
        <Container>
            <Summary>
                <h2>Summary</h2>
            </Summary>
            <Total>
                <span><strong>Products:</strong> <p>{totalOfProducts()}</p></span>
                <span><strong>Total:</strong> <p>$ {totalOfPrice()}</p></span>
            </Total>
            <ButtonBuy >BUY</ButtonBuy>
        </Container>
    )
}

export default Purchase;