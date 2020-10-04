import React, { FC, useState } from "react";
import SearchResults from './SearchResults';
import { Form, Button } from "semantic-ui-react";
import { User } from "../services/github/models";

interface SearchProps {
  users: User[];
  getMembersStart: (companyName: string) => void
}

const Search: FC<SearchProps> = ({ users, getMembersStart }) => {
  const [companyName, setCompanyName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = () => {
    getMembersStart(companyName);
  }

  return (
    <>
      <Form>
        <Form.Field>
          <label htmlFor="companyName">会社名</label>
          <input type="text" onChange={handleChange} id="companyName" />
        </Form.Field>
        <Button type="submit" onClick={handleSubmit}>
          検索
        </Button>
      </Form>
      <SearchResults users={users} />
    </>
  );
};

export default Search;
