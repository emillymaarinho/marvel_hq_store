import { ButtonMinus, ButtonPlus, QuantityContainer, QuantityItem } from "./CartQuantity.styled"

const CartQuantity = ({ index, onChangeQuantity, qnt }) => {

    const addItem = () => {
        onChangeQuantity(qnt + 1, index);
    }

    const removeItem = () => {
        if (qnt > 0) {
            onChangeQuantity(qnt - 1, index);
        };
    };

    return (
        <QuantityContainer>
            <ButtonMinus onClick={removeItem}>-</ButtonMinus>
            <QuantityItem>{qnt}</QuantityItem>
            <ButtonPlus onClick={addItem}>+</ButtonPlus>
        </QuantityContainer>
    )
};

export default CartQuantity;