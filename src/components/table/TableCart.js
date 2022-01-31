import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Total, ButtonBuy, ComicInfo, Button, Content, Image, QuantityContainer, Table, Title, Value } from './TableCart.styled';
import CartQuantity from '../cartQuantity/CartQuantity';
import defaultImg from '../../assets/comic.png';

const TableCart = () => {
    const { cart, removeComicFromCart, updateCartItem, } = useContext(CartContext);

    const removeComic = (index) => {
        removeComicFromCart(index);
    }

    const onChangeQuantity = (qnt, index) => {
        const item = cart[index];
        item.qnt = qnt;
        updateCartItem(index, item);
    }

    const getComicValue = (item) => {
        if (!item.price || item.price === 0.0) {
            return 'Free';
        } const price = item.qnt ? parseInt(item.qnt) * parseFloat(item.price) : item.price;
        return '$ ' + price.toFixed(2);
    }

    const totalOfPrice = () => {
        let total = 0;
        for (let item of cart) {
            total += item.price * item.qnt;
        }
        return total.toFixed(2);;
    }

    const totalOfProducts = () => {
        let products = 0;
        for (let item of cart) {
            products += item.qnt;
        }
        return products;
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length > 0 && cart.map((item, index) => (
                        <Content key={index}>
                            <td>
                                <ComicInfo>
                                    <Image src={item.image || defaultImg}></Image>
                                    <Title>{item.title}</Title>
                                </ComicInfo>
                            </td>
                            <QuantityContainer>
                                <CartQuantity index={index} qnt={item.qnt || 1} onChangeQuantity={onChangeQuantity} />
                                <Button onClick={() => removeComic(index)}>remove</Button>
                            </QuantityContainer>
                            <Value>{getComicValue(item)}</Value>
                        </Content>
                    ))}
                </tbody>
            </Table>
            <Total>
                <span>products: {totalOfProducts()}</span>
                <span>total: $ {totalOfPrice()}</span>
                <ButtonBuy >BUY</ButtonBuy>
            </Total>
        </div>
    );
};

export default TableCart;