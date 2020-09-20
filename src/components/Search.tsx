import React, { FC, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { User } from "../services/github/models";

interface SearchProps {
  users: User[];
  isLoading?: boolean;
}

const Search: FC = () => {
  const [companyName, setCompanyName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  return (
    <>
      <Form>
        <Form.Field>
          <label htmlFor="companyName">会社名</label>
          <input type="text" onChange={handleChange} id="companyName" />
        </Form.Field>
      </Form>
      <Button type="submit">検索</Button>
    </>
  );
};

export default Search;
