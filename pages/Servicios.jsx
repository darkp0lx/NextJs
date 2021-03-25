import Container from "../components/Container";
import styled from "styled-components"
const Servicios = () => {
  return (
    <div>
      <Container>
        <ContainerAbout>
        <h1>hola soy el HectorDev@ 👓 </h1>
          <h4>Ofresco mis Servicios de Frontend Developer tengo los siguientes skills 💥 :</h4>
          <ul>
            <li>✔html  </li>
            <li>✔css</li>
            <li>✔javascript</li>
            <li>✔React</li>
            <li>✔Next(basico)</li>
            <li>✔Firebase</li>
            <li>✔NodeJs(basico)</li>
          </ul>
         
        </ContainerAbout>
      </Container>
    </div>
  );
};

export default Servicios;
const ContainerAbout = styled.div`
  padding: 2em;
  padding-top: 8em;
  ul {
    list-style: none;
  }
`;
