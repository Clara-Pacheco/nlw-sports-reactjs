import { Container } from "./App"
import { Header } from '../components/Header/Header.jsx'
import { Section } from '../components/Section/Section.jsx'
import { ListItem } from "../components/ListItem/ListItem.jsx"
import { ListItemChannels } from "../components/ListItemChannels/ListItemChannels.jsx"
import { ListItemSocial } from "../components/ListItemSocial/ListItemSocial.jsx"

import InstagramLogo from '../assets/InstagramLogo.png'
import TwitchLogo from '../assets/TwitchLogo.png'
import TwitterLogo from '../assets/TwitterLogo.png'
import YouTubeLogo from '../assets/YoutubeLogo.png'

const gamesListData = [
  {
    url:'https://www.twitch.tv/directory/game/League%20of%20Legends',
    imgUrl:'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg',
    textAlt:'Imagem do jogo League of Legends'
  },

  {
    url:'https://www.twitch.tv/directory/game/VALORANT',
    imgUrl:'https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg',
    textAlt:'Imagem do jogo Valorant'
  },

  {
    url:'https://www.twitch.tv/directory/game/Minecraft',
    imgUrl:'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg',
    textAlt:'Imagem do jogo Minecraft'
  },

  {
    url:'https://www.twitch.tv/directory/game/Teamfight%20Tactics',
    imgUrl:'https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg',
    textAlt:'Imagem do jogo TFT'
  }
 
]

const channelListData = [
  {
    url:'https://www.twitch.tv/maykbrito',
    imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png',
    textAlt:'Imagem de Mayk Brito'
  },

  {
    url:'https://www.twitch.tv/jakeliny',
    imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/caaa9067-d25b-4efb-b7c7-93badfd041a9-profile_image-70x70.png',
    textAlt:'Imagem de Jakeliny'
  },

  {
    url:'https://www.twitch.tv/marcobrunodev',
    imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/9ee63f92-e4d2-4d3c-a235-1be4f642239a-profile_image-70x70.png',
    textAlt:'Imagem de Marco Bruno Dev'
  },

  {
    url:'https://www.twitch.tv/rafaballerinii',
    imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/5d664b85-b516-4d64-b3e2-914e58a9d247-profile_image-70x70.png',
    textAlt:'Imagem de Rafa Ballerini'
  }
]

const socialListData = [
  {
    url:'https://www.twitch.com',
    imgUrl:TwitchLogo,
    textAlt:'Logo Twitch'
  },

  {
    url:'https://www.twitter.com',
    imgUrl:TwitterLogo,
    textAlt:'Logo Twitter'
  },

  {
    url:'https://www.youtube.com',
    imgUrl: YouTubeLogo,
    textAlt: 'Logo Youtube'
  },

  {
    url:'https://www.instagram.com',
    imgUrl: InstagramLogo,
    textAlt:'Logo Instagram'
  }
]

export function App() {
  return (
    <Container>
      <Header />
      <main>
        <Section 
          title='Meus jogos'
          subtitle='Os games que eu mais curto jogar!'
        >
          { 
          
            gamesListData.map((item) => {
              return (
                <ListItem
                  url={item.url}
                  imgUrl={item.imgUrl}
                  textAlt={item.textAlt}
                />
              )
           })

          }

        </Section>
       
        <Section
          title='Canais e streamers'
          subtitle='Lista de canais e transmissões que não perco!!'
        >
          
            {
              channelListData.map((channel)=>{
                return(
                 
                    <ListItemChannels
                      url={channel.url}
                      imgUrl={channel.imgUrl}
                      textAlt={channel.textAlt}
                    />
                 
                )
              })
            }
        
        </Section>

        <Section
          title='Minhas redes'
          subtitle='Se conecte comigo agora mesmo!'
        >
            {
              socialListData.map((item) => {
                return(
                  <ListItemSocial
                    url={item.url}
                    imgUrl={item.imgUrl}
                    textAlt={item.textAlt}
                  />
                )
              })
            }
       

        </Section>
      </main>
    </Container>
  )
}


