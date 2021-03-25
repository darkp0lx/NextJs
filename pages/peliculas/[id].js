import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import styled from "styled-components";
import Head from "next/head";
const accessToken = "6f633e37";
import Router from "next/router";

const Pelicula = ({ item }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>HectorDev Next 🔥</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css"
        />
      </Head>
      <Header className="pelicula__header">
        <img src={`${item.Poster}`} />
        <div className="pelicula__cover"></div>
        <button onClick={()=>Router.push("/")} type="button" className="btn btn-outline-danger boton-atras">Volver atrás</button>
      </Header>
      <PeliculaContainer>
        <PeliculaItem style={{cursor:"pointer"}}>
          <h1>{item.Title}</h1>
          <img src={`${item.Poster}`} />
          <div className="pelicula__feature autors">
            <p className="feature">description:</p>
            <p className="contain"> {item.Plot}</p>
          </div>

          <div className="pelicula__feature autors">
            <p className="feature">actors:</p>
            <p className="contain">{item.Actors}</p>
          </div>
          <div className="pelicula__feature autors">
            <p className="feature">Premios :</p>
            <p className="contain">{item.Awards}</p>
          </div>
          <div className="pelicula__feature autors">
            <p className="feature">escrito por:</p>
            <p className="contain">{item.Writer}</p>
          </div>
          <div className="pelicula__feature autors">
            <p className="feature">puntuación:</p>
            <p className="contain">{item.imdbRating}</p>
          </div>
        </PeliculaItem>
      </PeliculaContainer>
    </div>
  );
};

Pelicula.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${ctx.query.id}&apikey=${accessToken}`
  );
  const data = await res.json();
  return {
    item: data,
  };
};
export default Pelicula;

//styles with styled component
const Header = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  .pelicula__cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-box-shadow: inset -8px -117px 86px 104px rgba(0, 0, 0, 1);
    -moz-box-shadow: inset -8px -117px 86px 104px rgba(0, 0, 0, 1);
    box-shadow: inset -8px -117px 86px 104px rgba(0, 0, 0, 1);
  }
  img {
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .boton-atras{
    position:fixed;
    top:30%;
    right:0;
    border-radius:10px;
    background:white;
    z-index:100;
    :hover{
      background:#DD4145;
    }
  }
`;
const PeliculaItem = styled.div`
  display: flex;
  z-index: 10;
  padding: 1em;
  flex-direction: column;
  align-items: center;
  width: 700px;
  background: white;
  border-radius: 20px;
  color: black;
  -webkit-box-shadow: 0px 10px 27px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 27px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 27px -3px rgba(0, 0, 0, 0.75);
  h1 {
    color: black;
    text-align:center;
    margin-top:.5em;
  }
  .pelicula__feature {
    width: 100%;
    height: 100%;
    display: flex;
    .feature {
      width: 200px;
    }
    .contain {
      width: 600px;
      margin-left: 1em;
    }
    p {
      margin: 1em;
    }
  }
`;

const PeliculaContainer = styled.div`
  margin-top: -500px;
  display: grid;
  place-items: center;
`;
