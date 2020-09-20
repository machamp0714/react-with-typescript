import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Card, Header, Image } from "semantic-ui-react";
import capitalize from "lodash/capitalize";

import { User } from '../services/github/models';

// 大切なのはこの時点で何をPropsとして定義するということ。
export interface MembersProps { 
  companyName: string;
  users: User[];
  isLoading?: boolean;
}

const Members: FC<MembersProps> = ({
  companyName = 'ruffnote',
  users = [],
  isLoading = false
}) => {
  const title = `${capitalize(companyName)}の開発メンバー`;

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
