import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "../../store/stateProvider";
import { actionTypes } from "../../store/reducer";
import fetch from 'isomorphic-fetch'
const accessToken = "6f633e37";

export const Search = (props) => {
  const [input, setInput] = useState("");
  const [data, dispatch] = useStateValue();
  

  const onSearchSubmit=async(e)=>{
    e.preventDefault();
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${accessToken}&s=${input}`
    )

    const pelis = await res.json()
    addData(pelis)
    console.log(pelis,"respuesta pedido")
  }

  const addData = (data) => {
    dispatch({
      type: actionTypes.ADD_DATA,
      data: data,
    });
  };

  useEffect(async () => {
    if(!input&&data.films.length==0){
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${accessToken}&s=marvel`
      )
      const pelis = await res.json()

      addData(pelis)
    }

  }, [input]);

  return (
    <SearchContainer>
      <form onSubmit={onSearchSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="input"
          placeholder="buscar..."
        />
        <button type="submit" >
        </button>
      </form>
    </SearchContainer>
  );
};
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    max-width: 200px;
  }
  i {
    height: 2em;
    width: 2em;
    color: black;
  }
  button {
    width: auto;
    display:none;
  }
`;
