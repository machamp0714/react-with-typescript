import React from 'react';
import CharacterList, { Character } from './CharacterList';
import './App.css';

const App = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '羽咲　綾乃',
      age: 16,
      height: 161
    }
  ];

  return (
    <div>
      <h1>はねバト</h1>
      <CharacterList school='北小町高校' characters={characters} />
    </div>
  )
}

export default App;
