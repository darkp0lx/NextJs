import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStateValue } from "../../store/stateProvider";
import { actionTypes } from "../../store/reducer";


export function MovieItem(props) {
  const{ imdbID, Poster, Title }=props
  const [data,dispatch]=useStateValue()

  const handleAddFavorite=()=>{
      dispatch({
        type: actionTypes.ADD_FAVORITES,
        favorite: props,
      });
  }
  return (
    <Movie>
      <Link href="/peliculas/[id]" as={`/peliculas/${imdbID}`}>
        <Image src={Poster} width={300} height={400} />
      </Link>
      <h2>{Title}</h2>
      <BotonFavorito onClick={handleAddFavorite}>
        <FavoriteIcon/>
      </BotonFavorito>
    </Movie>
  );
}

//Estilos

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
  position:relative;
  :hover {
    transform: scale(1.1);
  }
  img {
    border-radius: 10px 10px 0 0;
  }

`;
const BotonFavorito=styled.div`
  position:absolute;
  top:0;
  left:0;
  .MuiSvgIcon-root{
    color:red;
    :hover{
      transform: scale(1.2);
    }
  }
`
