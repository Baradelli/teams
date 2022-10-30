import { Container, Title, Subtitle } from './styles'

interface HighLightProps {
  title: string
  subtitle: string
}

export const HighLight = ({ title, subtitle }: HighLightProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
