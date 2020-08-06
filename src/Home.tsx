import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, List } from 'semantic-ui-react';

import { characterData } from './characterData';
const codes = Object.keys(characterData);


const Home: FC<{}> = () => (
  <>
    <title>作品紹介 | はねバド！</title>
    <header>
      <h1>「はねバド」</h1>
    </header>
    <Container className='summary'>
      <p>作品紹介</p>
    </Container>
    <h2>登場人物</h2>

    <List as='ul'>
      {codes.map(code => (
        <List.Item as='li' key={code}>
          <Link to={`/characters/${code}`}>{characterData[code].school}</Link>
        </List.Item>
      ))}
    </List>
  </>
)

export default Home;
