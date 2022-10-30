import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styles'

interface GroupCardProps extends TouchableOpacityProps {
  title: string
}

export const GroupCard = ({ title, ...props }: GroupCardProps) => {
  return (
    <Container {...props}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
