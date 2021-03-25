import styled from "styled-components";
import Container from "../components/Container";

const About = () => {
  return (
    <div>
      <Container>
        <ContainerAbout>
          <h1>hola soy el HectorDev@ 👓 </h1>
          <h4>
            En esta ocacion creamos una web con Next y estas son las cosas que
            resalto:
          </h4>
          <ul>
            <li>
              ✔No use los Hooks de react utilice algo parecido a useEffect
              :"getInitialProps"
            </li>
            <li>✔El manejo de estado es muy simple</li>
            <li>✔El manejo de rutas tambien</li>
            <li>✔Se podria mejorar el proyecto con un login,motor de busqueda y hacerlo responsive</li>

            <li>
              ❌ tube problemas con los estilos globales.(pero lo resolvi con
              una alternativa)
            </li>
            <li>
              ❌ no Tiene responsive  📱 
            </li>
          </ul>
        </ContainerAbout>
      </Container>
    </div>
  );
};

export default About;

const ContainerAbout = styled.div`
  padding: 2em;
  padding-top: 8em;
  ul {
    list-style: none;
  }
`;
