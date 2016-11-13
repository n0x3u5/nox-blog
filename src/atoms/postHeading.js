import React from 'react';

class PostHeading extends React.Component {
  render () {
    return (
      <h2>{this.props.text}</h2>
    );
  }
}
PostHeading.propTypes = {
  text: React.PropTypes.string
};
PostHeading.defaultProps = {
  text: ''
};

export default PostHeading;
