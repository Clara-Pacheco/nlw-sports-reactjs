import { Container } from "./App"
import { Header } from '../components/Header/Header.jsx'
import { Section } from '../components/Section/Section.jsx'
import { ListItem } from "../components/ListItem/ListItem.jsx"

export function App() {
  return (
    <Container>
      <Header />
      <main>
        <Section 
          title='Meus jogos'
          subtitle='Os games que eu mais curto jogar!'
        >
          <ListItem
            url='https://www.twitch.tv/directory/game/League%20of%20Legends'
            imgUrl='https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg'
            textAlt='Imagem do jogo League of Legends'
          />

          <ListItem
            url='https://www.twitch.tv/directory/game/VALORANT'
            imgUrl='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'
            textAlt='Imagem do jogo Valorant'
          />  

          <ListItem
            url='https://www.twitch.tv/directory/game/Minecraft'
            imgUrl='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg'
            textAlt='Imagem do jogo Minecraft'
          />  

          <ListItem
            url='https://www.twitch.tv/directory/game/Teamfight%20Tactics'
            imgUrl='https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg'
            textAlt='Imagem do jogo TFT'
          />  
          
          </Section>
       
        <Section
          title='Canais e streamers'
          subtitle='Lista de canais e transmissões que não perco!!'
        >
          

        </Section>

        <Section
          title='Minhas redes'
          subtitle='Se conecte comigo agora mesmo!'
        >

        </Section>
      </main>
    </Container>
  )
}


