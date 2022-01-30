import { Card, Title, Image, IconCart, IconCentered, Price } from "./Card.styled";
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react';

import defaultImg from '../../assets/comic.png';
import iconCart from '../../assets/add_carrinho.png';


const ComicCard = ({ image, title, onClick, price }) => {

    const { addComicToCart } = useContext(CartContext);

    const addToCart = () => {
        const comic = { image, title, price }
        addComicToCart(comic)

    }
    return (
        <div >
            <Card>
                <div onClick={onClick} >
                    <Title>{title}</Title>
                    <Image src={image || defaultImg} alt='imagem' />
                </div>
                <Price> {price ? `$ ${price}` : 'Grátis'} </Price>
                <IconCentered>
                    <IconCart onClick={addToCart} src={iconCart} />
                </IconCentered>
            </Card>
        </div>
    );
};

export default ComicCard;