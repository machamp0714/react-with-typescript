interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

export interface Characters {
  [code: string]: {
    school: '北小町高校',
    players: Character[]
  }
}

export const characterData: Characters = {
  kitakomachi: {
    school: '北小町高校',
    players: [
      {
        id: 1,
        name: '羽咲 綾乃',
        age: 16,
        height: 168
      },
      {
        id: 2,
        name: '羽咲　綾乃',
        age: 14
      }
    ]
  }
}
