import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getAllComics } from "../services/comics.services";
import { Container } from "../components/comics/Card.styled";
import ComicCard from '../components/comics/ComicCard';

const Home = () => {

  const [comics, setComics] = useState({});
  const history = useHistory();

  useEffect(() => {
    const getComics = () => {
      const result = getAllComics();
      setComics(result.data.results);
    }
    getComics();
  }, []);

  const onClickComic = (id, index) => {
    history.push({
      pathname: `/comic/${id}`,
      state: { comic: comics[index] },
    });
  };

  return (
    <Container>
      {comics.length > 0 && comics.map((comic, index) => (
        <ComicCard title={comic.title} image={comic.image} id={comic.id} key={comic.id}
          price={comic.prices && comic.prices.length > 0 && comic.prices[0].price > 0 ? comic.prices[0].price : 0}
          onClick={() => onClickComic(comic.id, index)} />
      ))};
    </Container>
  );
};

export default Home;