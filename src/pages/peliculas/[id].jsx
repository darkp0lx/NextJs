import fetch from "isomorphic-fetch";
import Head from "next/head";
import { Layout } from "../../components/base/Layout";
const accessToken = "6f633e37";
import { MovieDetails } from "../../components/movies/MovieDetails";

const Film = ({ item }) => {
  return (
    <div>
      <Head>
        <title>HectorDev Next 🔥</title>
      </Head>
      <Layout>
        <MovieDetails item={item} />
      </Layout>
    </div>
  );
};

Film.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${ctx.query.id}&apikey=${accessToken}`
  );
  const data = await res.json();
  return {
    item: data,
  };
};
export default Film;

//styles with styled component
