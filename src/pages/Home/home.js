import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { MovieCard } from "../../Components/MovieCard";
import { Pagination } from "../../Components/Pagination/Pagination";
import { fetchData } from "../../utils/fetch";
import { motion } from "framer-motion";
import { pageVariants } from "../../utils/pageTransitions";
import ImageGallery from "react-image-gallery";
import { useMovie } from "../../hooks/useMovie/useMovie";

import "./home.scss";

function Home() {
  const [disableBack, setDisableBack] = useState(false);
  const { getMovies, movies, actualPage, setActualPage } = useMovie();

  useEffect(() => {
    getMovies();
  }, [actualPage]);

  console.log(movies);

  const images = [];

  const addFeaturedMovies = () => {
    let featuredMovies = movies.slice(1, 10);
    return featuredMovies.map((movie) => {
      images.push({
        original: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      });
    });
  };
  addFeaturedMovies();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="home"
    >
      {" "}
      <div className="home__title">
        <h1>The best movie reviews</h1>
        <p>
          Discover the best movies to watch, new movie reviews and film
          trailers, plus the latest film releases worldwide.
        </p>
      </div>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        showIndex={false}
        autoPlay
      />
      <Layout gridLayout>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} data={movie} />;
        })}
      </Layout>
      <Pagination
        actualPage={actualPage}
        setPage={setActualPage}
        setDisableBack={setDisableBack}
      />
    </motion.div>
  );
}

export default Home;
