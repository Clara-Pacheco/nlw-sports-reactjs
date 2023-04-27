import { Container } from "./App"
import { Header } from '../components/Header/Header.jsx'
import { Section } from '../components/Section/Section.jsx'

export function App() {
  return (
    <Container>
      <Header />
      <Section
        title='Meus jogos'
        subtitle='Os games que eu mais curto jogar!'
      />
        <Section
          title='Canais e streamers'
          subtitle='Lista de canais e transmissões que não perco!!'
        />
      <Section
        title='Minhas redes'
        subtitle='Se conecte comigo agora mesmo!'
      />
    </Container>
  )
}


