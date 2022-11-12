import { RefObject } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>
}

export const Input = ({ inputRef, ...props }: InputProps) => {
  const { COLORS } = useTheme()

  return (
    <Container
      {...props}
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
    />
  )
}
