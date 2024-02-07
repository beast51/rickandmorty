export type CharacterType = {
  id: number
  name: string
  episode: string[]
  origin: {
    name: string
    url: string
  }
  species: string
  gender: string
  status: string
  image: string
  created: Object
  location: {
    name: string
    url: string
  }
  url: string
}



export type CharacterItemPropsType = {
  character: CharacterType
}

export type CharacterItemsPropsType = {
  characters: CharacterType[]
}
