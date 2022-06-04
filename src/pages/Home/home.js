import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { MovieCard } from "../../Components/MovieCard";
import { Pagination } from "../../Components/Pagination/Pagination";
import { fetchData } from "../../utils/fetch";
import { motion } from "framer-motion";
import { pageVariants } from "../../utils/pageTransitions";

import "./home.scss";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualPage, setPage] = useState(2);
  const [disableBack, setDisableBack] = useState(false);

  useEffect(() => {
    fetchData(setMovies, setLoading, actualPage);
  }, [actualPage]);

  console.log(movies);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="home"
    >
      <Layout gridLayout>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} data={movie} />;
        })}
      </Layout>
      <Pagination
        actualPage={actualPage}
        setPage={setPage}
        setDisableBack={setDisableBack}
      />
    </motion.div>
  );
}

export default Home;
