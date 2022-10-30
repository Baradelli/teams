import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

export const Input = ({ ...props }: TextInputProps) => {
  const { COLORS } = useTheme()

  return <Container {...props} placeholderTextColor={COLORS.GRAY_300} />
}
