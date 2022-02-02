import { Card, Title, Image, IconCart, IconCentered, Price } from "./Card.styled";
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react';
import toast from 'react-hot-toast';
import iconCart from '../../assets/add_carrinho.png';


const ComicCard = ({ id, image, title, onClick, price }) => {

    const { addComicToCart } = useContext(CartContext);

    const notify = () => toast.success('Adicionado com sucesso!');

    const addToCart = () => {
        const comic = { id, image, title, price, qnt: 1 };
        addComicToCart(comic);
        notify();
    };

    return (
        <div >
            <Card>
                <div onClick={onClick} >
                    <Title>{title}</Title>
                    <Image src={image} alt='imagem' onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "../../assets/comic.png";
                    }} />
                </div>
                <Price> {price ? `$ ${price}` : 'Free'} </Price>
                <IconCentered>
                    <IconCart onClick={addToCart} src={iconCart} />
                </IconCentered>
            </Card>
        </div>
    );
};

export default ComicCard;