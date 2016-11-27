import React from 'react';

class PostTitle extends React.Component {
  render () {
    return (
      <h2>{this.props.text}</h2>
    );
  }
}
PostTitle.propTypes = {
  text: React.PropTypes.string
};
PostTitle.defaultProps = {
  text: ''
};

export default PostTitle;
