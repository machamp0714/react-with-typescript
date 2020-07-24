import React, { FC } from 'react';

export interface Character {
  id: number
  name: string
  age: number
  height?: number
}

interface CharacterListProps {
  school: string
  characters: Character[]
}

const CharacterList: FC<CharacterListProps> = ({ school = '高校不明', characters }) => (
  <>
    <h2>{school}</h2>
    <ul>
      {characters.map(c => (
        <li key={c.id}>{c.name}, {c.age}, {c.height ? c.height : '???'}</li>
      ))}
    </ul>
  </>
)

export default CharacterList;
