import styled from "styled-components"
import { Layout } from "../components/base/Layout";
const Servicios = () => {
  return (
    <div>
      <Layout>
        <ContainerAbout>
        <h3>hola soy el HectorDev@ 👓 </h3>
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
      </Layout>
    </div>
  );
};

export default Servicios;
const ContainerAbout = styled.div`
  h3{
    color:white;
    font-size:30px;
  }
  padding: 2em;
  padding-top: 8em;
  ul {
    list-style: none;
  }
`;
