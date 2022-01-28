import { Card, Title, Image, IconCart, IconCentered, Price } from "./Card.styled";
import defaultImg from '../../assets/comic.png';
import iconCart from '../../assets/add_carrinho.png';
import { Link } from 'react-router-dom';

const ComicCard = ({ image, title, onClick, price }) => {

    return (
        <div >
            <Card>
                <div onClick={onClick} >
                    <Title>{title}</Title>
                    <Image src={image || defaultImg} alt='imagem' />

                </div>
                <Price>{price}</Price>
                <Link to='/buy'>
                    <IconCentered>
                        <IconCart src={iconCart} />
                    </IconCentered>
                </Link>

            </Card>
        </div>
    );
};

export default ComicCard;