import { Container } from './ListItemChannels'

export function ListItemChannels({ url, imgUrl, textAlt}) {
  return (
    <Container>
       <a 
        target="_blank"
        href={url}>
        <img
         src= {imgUrl}
         alt= {textAlt}
        />
      </a>
    </Container>
  )
}