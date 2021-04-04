import { Navigation } from './Navigation'
import styled from 'styled-components'

//component -> export function name_english
export function Layout ({ children }) {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  )
}

// Section styles
const Container = styled.div`
  top: 0;
  left: 0;
`
