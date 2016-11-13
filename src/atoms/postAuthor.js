import React from 'react';

class PostAuthor extends React.Component {
  render () {
    return (
      <span>{this.props.authorName}</span>
    );
  }
}
PostAuthor.propTypes = {
  authorName: React.PropTypes.string
};
PostAuthor.defaultProps = {
  authorName: 'John Doe'
};

export default PostAuthor;
