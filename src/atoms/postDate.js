import React from 'react';

class PostDate extends React.Component {
  render () {
    return (
      <span>{this.props.dateText}</span>
    );
  }
}
PostDate.propTypes = {
  dateText: React.PropTypes.string
};
PostDate.defaultProps = {
  dateText: '1st Jan, 1970'
};

export default PostDate;
