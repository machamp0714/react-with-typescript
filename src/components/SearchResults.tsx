import React, { FC } from 'react';
import { User } from '../services/github/models';
import { Helmet } from 'react-helmet';
import { Card, Header, Image } from "semantic-ui-react";

interface SearchResultsProps {
  users: User[]
}

const SearchResults: FC<SearchResultsProps> = ({ users }) => {
  const title: string = '検索結果'

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="Members" data-test="users">
        <Header as="h2">{title}</Header>
        <Card.Group>
          {users.map((user) => (
            <Card
              key={user.id}
              href={`https://github.com/${user.login}`}
              target="_blank"
            >
              <Card.Content>
                <Image floated="right" size="mini" src={user.avatar_url} />
                <Card.Header data-test="card-header">{user.login}</Card.Header>
                <Card.Meta>Github ID: {user.id}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </>
  );
}

export default SearchResults;