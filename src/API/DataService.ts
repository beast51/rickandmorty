import axios from 'axios'

export default class DataService {
  static async getCharacters(page: number) {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
      {
        params: {
          page: page,
        },
      }
    )
    return response
  }
  
  static async getCharacterById(id: number) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    )
    return response
  }

  static async getEpisodeById(url: string) {
    const response = await axios.get(
      `${url}`
    )
    return response
  }
}
