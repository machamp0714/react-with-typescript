import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Card, Header, Image } from "semantic-ui-react";
import capitalize from "lodash/capitalize";

const users = [
  {
    id: '12345',
    login: 'machamp0714',
    avatar_url: '../images/sushi.PNG'
  }
];

const Members = () => {
  const title = `${capitalize('ruffnote')}の開発メンバー`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='Members' data-test='users'>
        <Header as='h2'>{title}</Header>
        <Card.Group>
          {users.map(user => (
            <Card key={user.id} href={`https://github.com/${user.login}`} target='_blank'>
              <Card.Content>
                <Image floated='right' size='mini' src={user.avatar_url} />
                <Card.Header data-test='card-header'>{user.login}</Card.Header>
                <Card.Meta>Github ID: {user.id}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </>
  )
}

export default Members;
