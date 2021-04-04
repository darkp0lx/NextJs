import styled from "styled-components";
import { MovieItem } from "./MovieItem";
import { Search } from "./Search";

export function ListMovies({ movies }) {
  const moviesAll=movies.films.Search

  return (
    <Container>
      <Search />
      <GridPeliculas>
        {moviesAll?.map((movie, idx) => (
          <MovieItem key={idx} {...movie} />
        ))}
      </GridPeliculas> 
    </Container>
  );
}

//Estilos
const Container = styled.div`
  padding-top: 100px;

`
const GridPeliculas = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
