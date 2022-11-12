import { useNavigation } from '@react-navigation/native'

import { Container, Logo, BackButon, BackIcon } from './styles'

import logoImg from '@assets/logo.png'

interface HeaderProps {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: HeaderProps) => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButon onPress={handleGoBack}>
          <BackIcon />
        </BackButon>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
