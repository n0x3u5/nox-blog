import React from 'react';

class Input extends React.Component {
  render () {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder} />
    );
  }
}
Input.propTypes = {
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string
};
Input.defaultProps = {
  type: '',
  placeholder: 'Placeholder'
};

export default Input;
