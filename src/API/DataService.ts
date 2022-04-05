import axios from 'axios'

export default class DataService {
  static async getCharacters() {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
      {
        // params: {
        //   _limit: limit,
        //   _page: page,
        // }
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
}
