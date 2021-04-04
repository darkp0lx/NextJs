import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStateValue } from "../../store/stateProvider";
import { actionTypes } from "../../store/reducer";


export const Favorito = ({ film }) => {
  const [data,dispatch]=useStateValue()

  const deleteFavorite=()=>{
    dispatch({
      type: actionTypes.DELETE_FAVORITES,
      film: film,
    })
  }
  return (
    <div>
      <Movie>
        <Link href="/peliculas/[id]" as={`/peliculas/${film.imdbID}`}>
          <Image src={film.Poster} width={300} height={400} />
        </Link>
        <h2>{film.Title}</h2>
        <BotonFavorito onClick={deleteFavorite}>
            <DeleteIcon />
        </BotonFavorito>
      </Movie>
    </div>
  );
};
const Movie = styled.div`
  transition: transform 0.2s;
  cursor: pointer;
  z-index: 0;
  width: 250px;
  border-radius: 10px;
  margin: 1em;
  -webkit-box-shadow: 0px 11px 20px -3px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 11px 20px -3px rgba(0, 0, 0, 1);
  box-shadow: 0px 11px 20px -3px rgba(0, 0, 0, 1);
  position: relative;
  :hover {
    transform: scale(1.1);
  }
  img {
    border-radius: 10px 10px 0 0;
  }
`;

const BotonFavorito = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  .MuiSvgIcon-root {
    color: #018b13;
    :hover{
      transform: scale(1.2);
    }
  }
`;
