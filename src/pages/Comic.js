import { useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from "../context/CartContext";
import defaultImg from '../assets/comic.png';
import {
    CardSelect, ImageCardSelect, Button, ButtonCentered,
    TitleCardSelect, PriceCardSelect, TitleAndImg, Description, Display, NoDescription
} from '../components/comics/Card.styled';


const Comic = () => {

    const { addComicToCart } = useContext(CartContext);
    const [comic, setComic] = useState({ title: '' });
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        setComic(location.state.comic)
    }, [location.state.comic]);

    const addToCart = () => {
        addComicToCart(comic)
        history.push('/buy');
    }

    return (
        <div >
            <CardSelect >
                <Display>
                    <TitleAndImg>
                        <TitleCardSelect title={comic.title}>{comic.title}</TitleCardSelect>
                        <ImageCardSelect src={comic.image || defaultImg} ></ImageCardSelect>
                    </TitleAndImg>
                    <div>
                        <Description >
                            <span >{comic.description ? comic.description
                                : <NoDescription>No description</NoDescription>}</span>
                            <span> {comic.pageCount ? 'Number of pages: ' + comic.pageCount : null}</span>
                        </Description>
                        <PriceCardSelect>
                            $ {comic.prices && comic.prices.length > 0 && comic.prices[0].price > 0 ? comic.prices[0].price : 0.0}
                        </PriceCardSelect>
                    </div>
                </Display>
                <ButtonCentered >
                    <Button onClick={addToCart} >ADD TO CART</Button>
                </ButtonCentered>
            </CardSelect>
        </div>
    );
};

export default Comic