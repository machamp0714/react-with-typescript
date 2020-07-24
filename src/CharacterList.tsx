import React, { Component } from 'react';

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

class CharacterList extends Component<CharacterListProps> {
  render() {
    const { school, characters } = this.props;

    return (
      <>
        <h2>{school}</h2>
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              {character.name},{character.age},{character.height ? character.height : '???'}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default CharacterList;
