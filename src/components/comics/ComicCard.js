import { Card, Title, Image, IconCart, IconCentered, Price, ImgRare } from "./Card.styled";
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react';
import toast from 'react-hot-toast';
import iconCart from '../../assets/add_carrinho.png';
import comicRare from '../../assets/limited.png';


const ComicCard = ({ id, image, title, onClick, price, rare }) => {

    const { addComicToCart } = useContext(CartContext);

    const notify = () => toast.success('Adicionado com sucesso!');

    const addToCart = () => {
        const comic = { id, image, title, price, qnt: 1 };
        addComicToCart(comic);
        notify();
    };

    return (
        <div >
            <Card rare={rare}>
                <div onClick={onClick} >
                    {rare ? <ImgRare src={comicRare} /> : null}
                    <Title>{title}</Title>
                    <Image src={image} alt='imagem' />

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