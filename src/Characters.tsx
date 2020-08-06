import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { parse } from 'query-string';

import { characterData } from './characterData';
import CharacterList from './CharacterList';

type CharacterProps = {} & RouteComponentProps<{ code: string }>

const Characters: FC<CharacterProps> = ({ history, location, match }) => {
  const codes = Object.keys(characterData);
  const targetCode = match.params.code;
  const isLoading = parse(location.search).loading === 'true';
  console.log(targetCode);

  return codes.includes(targetCode) ? (
    <>
      <title>はねバド：キャラクター一覧</title>
      <header><h1>はねバド　キャラクター一覧</h1></header>
      {isLoading ? (
        <p>loading</p>
      ) : (
          <CharacterList
            school={characterData[targetCode].school}
            characters={characterData[targetCode].players}
          />
      )}
      <button onClick={() => { history.push('/'); }}>Homeへ</button>
    </>
  ) : (
    <Redirect to='/' />
  )
}

export default withRouter(Characters);