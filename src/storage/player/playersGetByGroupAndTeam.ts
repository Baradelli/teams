import { playerGetByGroup } from './playersGetByGroup'

export const playersGetByGroupAndTeam = async (group: string, team: string) => {
  try {
    const storage = await playerGetByGroup(group)

    const players = storage.filter((player) => player.team === team)

    return players
  } catch (error) {
    throw error
  }
}
