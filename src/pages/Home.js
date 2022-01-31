import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getAllComics } from "../services/comics.services";
import { Container } from "../components/comics/Card.styled";
import ComicCard from '../components/comics/ComicCard';
import Pages from "../components/pagination/Pages";


const Home = () => {

  const [comics, setComics] = useState([]);
  const history = useHistory();

  const [itensPerPage, setItensPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(50920 / itensPerPage);
  const startIndex = itensPerPage * currentPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = comics.slice(startIndex, endIndex);

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
    <div>
      <Container>
        {currentItens.length > 0 && currentItens.map((comic, index) => (
          <ComicCard title={comic.title} image={comic.image} id={comic.id} key={comic.id}
            price={comic.prices && comic.prices.length > 0 && comic.prices[0].price > 0 ? comic.prices[0].price : 0}
            onClick={() => onClickComic(comic.id, index)} />
        ))}
      </Container>
      <Pages setCurrentPage={setCurrentPage} pages={pages} />
    </div>
  );
};

export default Home;