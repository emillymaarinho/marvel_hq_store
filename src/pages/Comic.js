import { useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from "../context/CartContext";
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
        const comicFromHome = location.state.comic;
        const price = comicFromHome.prices && comicFromHome.prices.length > 0 &&
            comicFromHome.prices[0].price > 0 ? comicFromHome.prices[0].price : 0.0;
        const image = getComicImagePath(comicFromHome);
        const result = {
            qnt: 1, price, title: comicFromHome.title, id: comicFromHome.id, image,
            pageCount: comicFromHome.pageCount, description: comicFromHome.description
        };
        setComic(result)
    }, [location.state.comic]);

    const addToCart = () => {
        const result = {
            qnt: comic.qnt, price: comic.price,
            title: comic.title, id: comic.id, image: comic.image
        }
        addComicToCart(result);
        history.push('/buy');
    };

    const getComicImagePath = (item) => {
        if (item.thumbnail && item.thumbnail.path) {
            return `${item.thumbnail.path}.${item.thumbnail.extension}`
        };
    };

    return (
        <div >
            <CardSelect >
                <Display>
                    <TitleAndImg>
                        <TitleCardSelect title={comic.title}>{comic.title}</TitleCardSelect>
                        <ImageCardSelect src={comic.image} ></ImageCardSelect>
                    </TitleAndImg>
                    <div>
                        <Description >
                            <span >{comic.description ? comic.description
                                : <NoDescription>No description</NoDescription>}</span>
                            <span> {comic.pageCount ? 'Number of pages: ' + comic.pageCount : null}</span>
                        </Description>
                        <PriceCardSelect>
                            $ {comic.price}
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

export default Comic;