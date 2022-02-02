import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getAllComics } from "../services/comics.services";
import { Container } from "../components/comics/Card.styled";
import ComicCard from '../components/comics/ComicCard';
import Pages from "../components/pagination/Pages";
import Loading from '../components/loading/Loading';

const PAGE_SIZE = 20;

const Home = () => {

  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const [itensPerPage] = useState(PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);


  useEffect(() => {
    const getComics = async () => {
      setLoading(true)
      const result = await getAllComics(currentPage, PAGE_SIZE);
      setTotalItems(result.data.total);
      setComics(result.data.results);
      setLoading(false);
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
    window.scrollTo(0, 0);
  };

  const getComicImagePath = (comic) => {
    if (comic.thumbnail && comic.thumbnail.path) {
      return `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    };
  };

  return (
    <div>
      {loading ? <Loading /> :
        <>
          <div style={{
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center'
          }}>
            <Container>
              {comics.length > 0 && comics.map((comic, index) => (
                <ComicCard
                  title={comic.title}
                  image={getComicImagePath(comic)}
                  id={comic.id} key={comic.id}
                  price={comic.prices && comic.prices.length > 0 && comic.prices[0].price > 0 ? comic.prices[0].price : 0}
                  onClick={() => onClickComic(comic.id, index)} />
              ))}
            </Container>
          </div>
          <Pages currentPage={currentPage} pages={Math.ceil(totalItems / itensPerPage)} changePage={handlePageChange} />
        </>}
    </div>
  );
};

export default Home;