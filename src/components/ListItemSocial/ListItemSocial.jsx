import { Container } from './ListItemSocial'

export function ListItemSocial({ url, imgUrl, textAlt}) {
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