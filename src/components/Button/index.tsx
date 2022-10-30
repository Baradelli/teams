import { TouchableOpacityProps } from 'react-native'

import { ButtonTypeStyleProps, Container, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
}

export const Button = ({ title, type = 'PRIMARY', ...props }: ButtonProps) => {
  return (
    <Container type={type} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
