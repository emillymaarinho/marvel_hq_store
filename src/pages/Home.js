import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getAllComics } from "../services/comics.services";
import { Container } from "../components/comics/Card.styled";
import ComicCard from '../components/comics/ComicCard';
import Pages from "../components/pagination/Pages";

const PAGE_SIZE = 20;

const Home = () => {

  const [comics, setComics] = useState([]);
  const history = useHistory();

  const [itensPerPage] = useState(PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(50920 / itensPerPage);


  useEffect(() => {
    const getComics = () => {
      const result = getAllComics();
      setComics(result[currentPage].data.results);
    }
    getComics();
  }, [currentPage]);

  const onClickComic = (id, index) => {
    history.push({
      pathname: `/comic/${id}`,
      state: { comic: comics[index] },
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

  return (
    <div>
      <div style={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
      }}>
        <Container>
          {comics.length > 0 && comics.map((comic, index) => (
            <ComicCard title={comic.title} image={comic.image} id={comic.id} key={comic.id}
              price={comic.prices && comic.prices.length > 0 && comic.prices[0].price > 0 ? comic.prices[0].price : 0}
              onClick={() => onClickComic(comic.id, index)} />
          ))}
        </Container>
      </div>
      <Pages currentPage={currentPage} pages={pages} changePage={handlePageChange} />
    </div>
  );
};

export default Home;