import { Container, Message } from './styles'

interface ListEmpty {
  message: string
}

export const ListEmpty = ({ message }: ListEmpty) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
