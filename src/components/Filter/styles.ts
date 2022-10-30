import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export interface FilterStyleProps {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => css`
    border: 1px solid ${isActive ? theme.COLORS.GREEN_700 : 'transparent'};
  `}

  border-radius: 4px;
  margin-right: 12px;

  width: 70px;
  height: 38px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`
