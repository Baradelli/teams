import { useState, useEffect, useRef } from 'react'
import { useRoute } from '@react-navigation/native'
import { FlatList, Alert, TextInput } from 'react-native'

import { AppError } from '@utils/AppError'

import { playerAddByGroups } from '@storage/player/playerAddByGroup'
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup'

import { ButtonIcon } from '@components/ButtonIcon'
import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'

interface RouteParams {
  group: string
}

export const Players = () => {
  const [newPlayerName, setNewPlayerName] = useState<string>('')
  const [team, setTeam] = useState<string>('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const route = useRoute()
  const { group } = route.params as RouteParams

  const newPlayerBaneInputRef = useRef<TextInput>(null)

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team)

      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Pessoas',
        'Não foi ossível carregar as pessoas do time selecionado',
      )
    }
  }

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.',
      )
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroups(newPlayer, group)

      newPlayerBaneInputRef.current?.blur()

      setNewPlayerName('')

      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.error(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      }
    }
  }

  const handlePlayerRemove = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()
    } catch (error) {
      console.log(error)
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoas')
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <HighLight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          inputRef={newPlayerBaneInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            onRemove={() => handlePlayerRemove(item.name)}
            name={item.name}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
