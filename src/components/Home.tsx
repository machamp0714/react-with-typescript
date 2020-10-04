import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import capitalize from 'lodash/capitalize';
import { List } from 'semantic-ui-react';

const companies = ['ruffnote', 'facebook'];

const Home: FC = () => (
  <>
    <List celled relaxed>
      {companies.map(companyName => (
        <List.Item className='list-item' key={companyName}>
          <List.Icon name='users' size='large' verticalAlign='middle' />
          <List.Content>
            <Link to={`/${companyName}/members`}>
              {capitalize(companyName)}のメンバー
            </Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
    <Link to='/search'>組織検索</Link>
  </>
)

export default Home;
