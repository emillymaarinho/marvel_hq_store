import { useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import defaultImg from '../assets/comic.png';
import {
    CardSelect, ImageCardSelect, Button, ButtonCentered,
    TitleCardSelect, PriceCardSelect
} from '../components/comics/Card.styled';


const Comic = () => {

    const [comic, setComic] = useState({ title: '' })
    const location = useLocation()
    const history = useHistory();

    useEffect(() => {
        setComic(location.state.comic)
    }, []);

    const addToCart = () => {
        history.push('/buy');
    }

    return (
        <CardSelect >
            <TitleCardSelect>{comic.title}</TitleCardSelect>
            <ImageCardSelect src={comic.image || defaultImg} ></ImageCardSelect>
            <PriceCardSelect>
                {comic.prices && comic.prices.length > 0 && comic.prices[0].price > 0 ? 'R$ ' + comic.prices[0].price : 'Grátis'}
            </PriceCardSelect>
            <ButtonCentered >
                <Button onClick={addToCart} >Adicionar ao carrinho</Button>
            </ButtonCentered>

        </CardSelect>
    );
};

export default Comic