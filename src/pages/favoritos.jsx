import React from "react";
import { Layout } from "../components/base/Layout";
import styled from "styled-components";
import { useStateValue } from "../store/stateProvider";
import { Favorito } from "../components/favoritos/Favorito";
const favoritos = () => {
  const [data, dispatch] = useStateValue();

  return (
    <Layout>
      <Container>
        {data.favorites?.map((item) => (
          <Favorito film={item} />
        ))}
      </Container>
    </Layout>
  );
};

export default favoritos;

const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin-top: 75px;
  h3 {
    font-size: 30px;
    color: white;
  }
`;
