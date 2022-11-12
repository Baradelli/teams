import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { AppError } from '@utils/AppError'

import { Container, Content, Icon } from './styles'

import { useState } from 'react'

import { groupCreate } from '../../storage/group/groupCreate'

import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export const NewGroup = () => {
  const [group, setGroup] = useState<string>('')

  const navigation = useNavigation()

  const handleNew = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma')
      }

      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possivel criar um novo grupo')
        console.error(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <HighLight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  )
}
