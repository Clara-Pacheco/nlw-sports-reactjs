import { Container } from './ListItem.js'

export function ListItem({ url, imgUrl, textAlt}) {
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