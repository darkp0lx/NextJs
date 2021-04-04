import styled from "styled-components";
import Link from "next/link";
import { MovieInfoItem } from "./MovieInfoItem";
import Image from "next/image";

export function MovieDetails({ item }) {
  return (
    <Container>
      <Header>
        <Img layout="fill" src={`${item.Poster}`} />
        <Link href="/">
          <button>Volver atrás</button>
        </Link>
      </Header>
      <ContainerCard>
        <Card>
          <CardContent>
            <h1>{item.Title}</h1>
            <MovieInfoItem name="description" value={item.Plot} />
            <MovieInfoItem name="actors" value={item.Actors} />
            <MovieInfoItem name="premios" value={item.Awards} />
            <MovieInfoItem name="escrito por" value={item.Writer} />
            <MovieInfoItem name="puntuación" value={item.imdbRating} />
          </CardContent>
        </Card>
      </ContainerCard>
    </Container>
  );
}
const CardContent = styled.div`
  text-align: center;
  transform: translateY(25px);
  opacity: 0;
  transition: 0.5s;
  :hover {
    transform:translateY6(0px);
    opacity:1;
  }
  @media (max-width: 450px) {
    padding: 0;
  }
  h2 {
    position: absolute;
    top: -40px;
    right: 30px;
    font-size: 8px;
    color: rgba(255, 255, 255, 0.05);
  }
  h3 {
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
  }
  p {
    font-size: 1em;
    color: #fff;
    font-weight: 300;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 15px;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
const Card = styled.div`
  position: relative;
  width: 100%;
  padding: 1em;
  height: 400px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(37, 35, 35, 0.383);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(83, 81, 81, 0.5);
  border-left: 1px solid rgba(83, 81, 81, 0.5);
  backdrop-filter: blur(5px);
  @media (max-width: 450px) {
    margin: 0;
    height: auto;
  }
`;
const ContainerCard = styled.div`
  width: 100%;
  position: absolute;
  top: -2%;
  right: 0;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
  text-shadow: 1px 1px 10px #000000;
  font-weight: bold;
  color: white;
  h1 {
    font-size: 40px;
    margin-bottom: 0;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 5px #000000;
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
`;
//styles with styled component
const Container = styled.div`
  margin-top: 75px;
  position: relative;
`;
const Header = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  img {
    object-fit: fill;
  }

  button {
    font-weight: bold;
    width: 150px;
    height: 40px;
    position: fixed;
    top: 30%;
    right: 0;
    border-radius: 10px;
    background: white;
    z-index: 100;
    @media (max-width: 450px) {
      width: 75px;
    }
    :hover {
      background: #dd4145;
      color: white;
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

  //media@queries
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (min-width: 320px) and (max-width: 450px) {
    width: 280px;
  }
  h1 {
    color: black;
    text-align: center;
    margin-top: 0.5em;
  }
`;

const PeliculaContainer = styled.div`
  margin-top: -500px;
  display: grid;
  place-items: center;
`;

const Img = styled(Image)`
  -webkit-box-shadow: inset 10px -200px 92px 125px rgba(0, 0, 0, 0.92);
  -moz-box-shadow: inset 10px -200px 92px 125px rgba(0, 0, 0, 0.92);
  box-shadow: inset 10px -200px 92px 125px rgba(0, 0, 0, 0.92);
`;
