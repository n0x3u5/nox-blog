import React from 'react';

import Button from '../atoms/button.js';
import Input from '../atoms/input';

class Search extends React.Component {
  render () {
    return (
      <span>
        <Input type="text" placeholder="Search..." />
        <Button text="Search Posts" />
      </span>
    );
  }
}

export default Search;
