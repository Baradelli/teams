import { Container, Logo, BackButon, BackIcon } from './styles'

import logoImg from '@assets/logo.png'

interface HeaderProps {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: HeaderProps) => {
  return (
    <Container>
      {showBackButton && (
        <BackButon>
          <BackIcon />
        </BackButon>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
