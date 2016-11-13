import React from 'react';
import ReactDOM from 'react-dom';

import Search from './molecules/search';
import PostHeading from './atoms/postHeading';
import PostDate from './atoms/postDate';
import PostAuthor from './atoms/postAuthor';

class App extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <PostDate dateText="4th November, 2016" /> - <PostAuthor postAuthor="Nakshatra Mukhopadhyay" />
        <PostHeading text="First Post!" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
