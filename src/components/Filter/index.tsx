import { TouchableOpacityProps } from 'react-native'

import { FilterStyleProps, Container, Title } from './styles'

interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export const Filter = ({ title, isActive = false, ...props }: FilterProps) => {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
