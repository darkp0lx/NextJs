import Head from "next/head";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Router from "next/router";
import styled from "styled-components";
const accessToken = "6f633e37";

export default function Home({ peliculas }) {
  console.log(peliculas.Search);
  return (
    <div>
      <Head>
        <title>este es el index</title>
      </Head>
      <Container>
        <GridPeliculas>
          {peliculas.Search?.map((el) => (
            <div className="pelicula" style={{cursor:"pointer"}} key={el.imdbID}>
              <img
                loading="lazy"
                onClick={() => Router.push(`/peliculas/${el.imdbID}`)}
                src={`${el.Poster}`}
              />
              <h2>{el.Title}</h2>
            </div>
          ))}
        </GridPeliculas>
      </Container>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${accessToken}&s=batman`
  );
  const data = await res.json();
  return { peliculas: data };
};

const GridPeliculas = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;
  text-align: center;
  .pelicula {
    width: 300px;
    margin: 1em;
    -webkit-box-shadow: 0px 11px 20px -3px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 11px 20px -3px rgba(0, 0, 0, 1);
    box-shadow: 0px 11px 20px -3px rgba(0, 0, 0, 1);
  }
`;
