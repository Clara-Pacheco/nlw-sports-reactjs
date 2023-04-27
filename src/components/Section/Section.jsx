import { Container } from './Section.js'

export function Section({ title, subtitle }){
  return (
    <Container>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
      <div>
        img
      </div>
    </Container>
  )
}