import styled from 'styled-components'
import { Layout } from '../components/base/Layout'

const About = () => {
  return (
    <div>
      <Layout>
        <ContainerAbout>
          <h3>hola soy el HectorDev@ 👓 </h3>
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
            <li>
              ✔Se podria mejorar el proyecto con un login,motor de busqueda y
              hacerlo responsive
            </li>
            <li>
              ❌ tube problemas con los estilos globales.(pero lo resolvi con
              una alternativa)
            </li>
            <li>❌ no Tiene responsive 📱</li>
          </ul>
        </ContainerAbout>
      </Layout>
    </div>
  )
}

export default About

const ContainerAbout = styled.div`
  padding: 2em;
  padding-top: 8em;
  h3{
    color:white;
    font-size:30px;
  }
  ul {
    list-style: none;
  }
`
