import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);

    this.logQuery = this.logQuery.bind(this);
    this.inputChanged = this.inputChanged.bind(this);

    this.state = {
      input: ''
    };
  }

  inputChanged (e) {
    this.setState({
      input: e.target.value
    });
  }

  logQuery () {
    console.log(this.state.input);
  }

  buttonText () {
    return this.state.input || 'Search Posts';
  }

  render () {
    return (
      <span>
        <input type="text" placeholder="Search..." onChange={this.inputChanged} />
        <button onClick={this.logQuery}>{this.buttonText()}</button>
      </span>
    );
  }
}

export default Search;
