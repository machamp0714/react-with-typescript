import React from 'react';
import CharacterList, { Character } from './CharacterList';
import './App.css';

class App extends React.Component {
  render() {
    const characters: Character[] = [
      {
        id: 1,
        name: '羽咲 綾乃',
        age: 16,
        height: 151
      },
      {
        id: 2,
        name: '新垣 なぎさ',
        age: 18,
        height: 174
      },
      {
        id: 3,
        name: '泉 莉子',
        age: 15
      }
    ];

    return (
      <div>
        <h1>はねバト</h1>
        <CharacterList school='北小町高校' characters={characters} />
      </div>
    )
  }
}

export default App;
